"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { Icon, LatLngExpression, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { journeyData, JourneyStop } from "@/data/journey";
import { useState, useMemo, memo, useEffect, useRef } from "react";
import styles from "./index.module.css";

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function createSmoothCurve(
  start: LatLngExpression,
  end: LatLngExpression,
  offset = 5,
  numPoints = 200
): LatLngExpression[] {
  const [lat1, lng1] = start as [number, number];
  const [lat2, lng2] = end as [number, number];

  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;

  const controlLat = midLat + offset;
  const controlLng = midLng;

  const points: LatLngExpression[] = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const x =
      (1 - t) * (1 - t) * lng1 +
      2 * (1 - t) * t * controlLng +
      t * t * lng2;
    const y =
      (1 - t) * (1 - t) * lat1 +
      2 * (1 - t) * t * controlLat +
      t * t * lat2;
    points.push([y, x]);
  }
  return points;
}

const getColor = (i: number) => {
  const colors = [
    "#1976D2", "#E53935", "#8E24AA", "#00897B", "#F9A825",
    "#6D4C41", "#3949AB", "#D81B60", "#43A047", "#FB8C00"
  ];
  return colors[i % colors.length];
};

const LeafletMap = memo(function LeafletMap({
  selected,
  prev,
  onMarkerReady,
}: {
  selected: JourneyStop | null;
  prev: JourneyStop | null;
  onMarkerReady: (id: string, marker: LeafletMarker) => void;
}) {
  const map = useMap();

  useEffect(() => {
  if (selected && prev) {
    const start: LatLngExpression = [prev.lat, prev.lng];
    const end: LatLngExpression = [selected.lat, selected.lng];
    const path = createSmoothCurve(start, end, 5, 300);

    let i = 0;
    const speed = 8;
    const anim = setInterval(() => {
      if (i < path.length) {
        // 🟡 Áp dụng offset khi pan
        const point = map.project(path[i]);
        const offsetY = 150; // Dịch lên 150px để giữ chỗ cho popup
        const adjustedPoint = point.subtract([0, offsetY]);
        const adjustedLatLng = map.unproject(adjustedPoint);
        map.panTo(adjustedLatLng, { animate: false });

        i++;
      } else {
        clearInterval(anim);
      }
    }, speed);
    return () => clearInterval(anim);
  } else if (selected && !prev) {
    // 🟡 Khi lần đầu chọn mốc → cũng áp dụng offset
    const point = map.project([selected.lat, selected.lng]);
    const offsetY = -150;
    const adjustedPoint = point.subtract([0, offsetY]);
    const adjustedLatLng = map.unproject(adjustedPoint);

    map.flyTo(adjustedLatLng, 5, { duration: 2 });
  }
}, [selected, prev, map]);


  return (
    <>
      {journeyData.slice(0, -1).map((point, i) => {
        const next = journeyData[i + 1];
        const positions = createSmoothCurve([point.lat, point.lng], [next.lat, next.lng], 5);
        return (
          <Polyline
            key={point.id}
            positions={positions}
            pathOptions={{ color: getColor(i), weight: 3, opacity: 0.8 }}
          />
        );
      })}

      {journeyData.map((point) => (
        <Marker
          key={point.id}
          position={[point.lat, point.lng]}
          icon={markerIcon}
          ref={(m) => {
            if (m) onMarkerReady(point.id, m);
          }}
        >
          <Popup minWidth={550} maxWidth={600}>
            <div className={styles.popupContainer}>
              {point.img && (
                <img
                  src={point.img}
                  alt={point.title}
                  className={styles.popupImg}
                />
              )}
              <div className={styles.popupContent}>
                <h3>{point.title}</h3>
                <div className={styles.popupDate}>{point.year}</div>
                <p>{point.description}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
});

export default function WorldMap() {
  const [selected, setSelected] = useState<JourneyStop | null>(null);
  const [prev, setPrev] = useState<JourneyStop | null>(null);
  const markersRef = useRef<Record<string, LeafletMarker>>({});

  useEffect(() => {
    Object.values(markersRef.current).forEach((m) => m.closePopup());
    if (selected && markersRef.current[selected.id]) {
      markersRef.current[selected.id].openPopup();
    }
  }, [selected]);

  const handleSelect = (point: JourneyStop) => {
    setPrev(selected);
    setSelected(point);
  };

  const handleMarkerReady = (id: string, marker: LeafletMarker) => {
    markersRef.current[id] = marker;
  };

  // 📅 Gom nhóm theo năm → mảng { year: string, stops: JourneyStop[] }
  const timelineGroups = useMemo(() => {
    const groups: Record<string, JourneyStop[]> = {};
    journeyData.forEach((p) => {
      const match = p.year.match(/\d{4}/);
      const year = match ? match[0] : "Khác";
      if (!groups[year]) groups[year] = [];
      groups[year].push(p);
    });
    return Object.entries(groups)
      .map(([year, stops]) => ({ year, stops }))
      .sort((a, b) => Number(a.year) - Number(b.year));
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full h-[930px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[20, 0]}
          zoom={3}
          scrollWheelZoom={true}
          className={styles.mapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletMap selected={selected} prev={prev} onMarkerReady={handleMarkerReady} />
        </MapContainer>
      </div>

      {/* 🕰️ Timeline theo nhóm năm → hiển thị từng mốc chi tiết */}
      <div className={styles.timelineContainer}>
        {timelineGroups.map((group, groupIdx) => (
          <div key={group.year} className="flex flex-col gap-2">
            <div className="font-bold text-sm text-gray-700">{group.year}:</div>
            <div className="flex gap-2 flex-wrap">
              {group.stops.map((stop, idx) => {
                const isActive = selected?.id === stop.id;
                const color = getColor(groupIdx);
                return (
                  <button
                    key={stop.id}
                    onClick={() => handleSelect(stop)}
                    style={{
                      borderColor: color,
                      color: isActive ? "#fff" : color,
                      background: isActive
                        ? `linear-gradient(90deg, ${color}, ${color}CC)`
                        : "#fff",
                    }}
                    className={`${styles.timelineItem} ${isActive ? styles.active : ""}`}
                  >
                    {stop.year.replace(/\/?\d{4}/, "").trim() || stop.year}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
