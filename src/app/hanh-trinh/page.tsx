"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WorldMap from "@/components/worldmap";
import styles from "./hanhtrinh.module.css";
import { motion } from "framer-motion";

export default function HanhTrinhPage() {
  return (
    <>
      <Navbar />
      <motion.main
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Hành trình tìm đường cứu nước</h1>

        <div className={styles.mapWrapper}>
          <WorldMap />
        </div>

        <section className={styles.timelineLegend}>
          <h2>Những chặng đường tiêu biểu</h2>
          <ul>
            <li>
              <strong>1911</strong> — Bác rời Bến Nhà Rồng lên tàu Amiral Latouche Tréville, bắt đầu hành trình sang Pháp.
            </li>
            <li>
              <strong>1912–1917</strong> — Bác hoạt động và học tập ở nhiều quốc gia như Mỹ, Anh, Pháp..., sống cùng nhân dân lao động để tìm hiểu đời sống và chính trị phương Tây.
            </li>
            <li>
              <strong>1920</strong> — Bác gia nhập Quốc tế Cộng sản, tham gia phong trào cách mạng quốc tế và tiếp nhận chủ nghĩa Mác–Lênin.
            </li>
            <li>
              <strong>1930</strong> — Tại Hương Cảng, Bác chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.
            </li>
            <li>
              <strong>28/1/1941</strong> — Bác vượt cột mốc 108, trở về Pác Bó (Cao Bằng) sau gần 30 năm bôn ba hải ngoại.
            </li>
          </ul>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
