export interface JourneyStop {
  id: string;
  title: string;
  year: string;
  description: string;
  lat: number;
  lng: number;
  img: string;
}

export const journeyData: JourneyStop[] = [
  {
    id: "ben-nha-rong-1911",
    title: "Bến Nhà Rồng – Sài Gòn (Việt Nam)",
    year: "05/06/1911",
    description:
      "Ngày 5/6/1911, Nguyễn Tất Thành (sau này là Hồ Chí Minh) rời bến Nhà Rồng, TP Sài Gòn, lên tàu **Amiral Latouche-Tréville**, làm phụ bếp, bắt đầu hành trình tìm đường cứu nước. Đây là mốc xuất phát cho 30 năm bôn ba khắp thế giới để chuẩn bị cho cách mạng Việt Nam.",
    lat: 10.762622,
    lng: 106.708382,
    img: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785c531738e3787169ce34b631b27454b96c18e14a012f926c7508697c48f7fd58d4f9efb0c8972265f49d8f86164867992/bac_ho_1_1.jpg"
  },
  {
    id: "singapore-1911",
    title: "Singapore",
    year: "08/06/1911",
    description:
      "Tàu dừng chân tại Singapore ngày 8/6/1911 khi hành trình từ Sài Gòn đi Pháp. Đây là một trong các chặng dừng đầu tiên trên tuyến đường biển sang phương Tây.",
    lat: 1.352083,
    lng: 103.819836,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/739cccb3-d8bf-4cc7-a394-193624b2e9b3/dft1tjh-2cbe4504-1d13-4363-b696-33f3cc16695b.jpg/v1/fill/w_1280,h_822,q_75,strp/1911__singapore_by_colonialismwasgood_dft1tjh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODIyIiwicGF0aCI6IlwvZlwvNzM5Y2NjYjMtZDhiZi00Y2M3LWEzOTQtMTkzNjI0YjJlOWIzXC9kZnQxdGpoLTJjYmU0NTA0LTFkMTMtNDM2My1iNjk2LTMzZjNjYzE2Njk1Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0QQNDAtQPjF0ESAyyqbfd-Ep76Q5eKMAZ7qIQRne6Jk"
  },
  {
    id: "colombo-1911",
    title: "Colombo, Sri Lanka",
    year: "11/06/1911",
    description:
      "Ngày 11/6/1911, tàu cập cảng Colombo, Sri Lanka. Đây là một trong các điểm dừng để tiếp nhiên liệu và tiếp tế trên hành trình biển dài.",
    lat: 6.927079,
    lng: 79.861244,
    img: "https://www.periodpaper.com/cdn/shop/products/BVM2_162.jpg?v=1571709095"
  },
  {
    id: "suez-1911",
    title: "Suez / Ai Cập",
    year: "30/06/1911",
    description:
      "Ngày 30/6/1911, tàu ghé khu vực Suez (kênh đào Suez, Ai Cập) — điểm quan trọng kết nối tuyến đường biển từ Ấn Độ Dương sang Địa Trung Hải.",
    lat: 30.04442,
    lng: 31.235712,
    img: "https://vcdn1-vnexpress.vnecdn.net/2021/03/29/szuez-3-3007-1617020263.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=kwDvX24_yS0UTS_U0oPKOg"
  },
  {
    id: "marseille-1911",
    title: "Marseille (Pháp)",
    year: "06/07/1911",
    description:
      "Ngày 6/7/1911, tàu đến Marseille — một cảng lớn ở miền Nam nước Pháp. Đây là điểm mở đầu hành trình người thanh niên Việt Nam tiếp cận châu Âu.",
    lat: 43.296482,
    lng: 5.36978,
    img: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f48e23810ac6/112019/cangmacxay1_2019111117145.jpg"
  },
  {
    id: "le-havre-1911",
    title: "Le Havre (Pháp)",
    year: "15/07/1911",
    description:
      "Ngày 15/7/1911, tàu cập bến Le Havre, Pháp. Đây là điểm cuối của chặng biển đầu tiên, từ đó Nguyễn Tất Thành bắt đầu quá trình đi bộ, tàu hỏa, lao động khắp châu Âu để tìm hiểu thực tế.",
    lat: 49.49437,
    lng: 0.107929,
    img: "https://congnghieptauthuyvietnam.vn/upload/images/2022/So%20thang%206-2022/2022_T6_VHDL_1.jpg"
  },

  // 🧭 Chặng 2: Vòng quanh châu Phi
  {
    id: "vong-quanh-chau-phi-1912",
    title: "Vòng quanh Châu Phi",
    year: "01/1912 - 08/1912",
    description:
      "Đầu năm 1912, Nguyễn Tất Thành xin việc trên một tàu biển chạy vòng quanh châu Phi, cập các cảng Tây Ban Nha, Bồ Đào Nha, Algérie, Tunisie, Congo, Dahomey, Guinée, Sénégal… Qua đó, Người quan sát thực trạng người lao động, áp bức thuộc địa và hình thành ý thức đấu tranh giải phóng dân tộc. (Chưa tìm được ngày tháng cụ thể cho từng cảng).",
    lat: 14.716677, // ví dụ: Dakar (Senegal)
    lng: -17.467686,
    img: "https://media.baothaibinh.com.vn/upload/news/6_2021/chu_tich_ho_chi_minh_voi_nhung_cong_viec_da_trai_qua_trong_hanh_trinh_cuu_nuoc_14451104062021.jpg"
  },

  {
    id: "new-york-1912",
    title: "New York (Mỹ)",
    year: "25/12/1912",
    description:
      "Ngày 25/12/1912, Nguyễn Ái Quốc đến New York, Mỹ, sau các điểm dừng tại Martinique, Uruguay, Argentina theo lộ trình giữa Pháp – Mỹ – Anh. Ở Mỹ, Người làm vườn ở Brooklyn, làm đầu bếp tại khách sạn Omni Parker House để sống và quan sát xã hội Mỹ.",
    lat: 40.712776,
    lng: -74.005974,
    img: "https://oldnycphotos.com/cdn/shop/products/TimesSquare1912LSouthCU040623web_720x576.jpg?v=1680783470"
  },
  {
    id: "london-1913",
    title: "London (Anh)",
    year: "1913 - 1917",
    description:
      "Từ năm 1913 đến 1917, tại Anh, Nguyễn Ái Quốc làm nhiều nghề: khách sạn Drayton Court, Carlton; công nhân cảng; quét tuyết trường học. Ông thường đến Thư viện Anh để đọc sách triết học, lý luận, tiếp cận tư tưởng tiến bộ của Anh quốc.",
    lat: 51.507351,
    lng: -0.127758,
    img: "https://c8.alamy.com/comp/CPJ7M3/the-national-gallery-at-the-trafalgar-square-in-london-1913-CPJ7M3.jpg"
  },
  {
    id: "paris-1917",
    title: "Paris (Pháp)",
    year: "11/1917 - 06/1923",
    description:
      "Từ cuối năm 1917 trở về Pháp, Nguyễn Ái Quốc tích cực hoạt động phong trào người Việt kiều, gia nhập Đảng Xã hội Pháp, tham gia sáng lập Đảng Cộng sản Pháp (1920), lập báo **Le Paria** (Người cùng khổ) năm 1922.",
    lat: 48.856613,
    lng: 2.352222,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANRI0L_FkMKvadJxCexUT8bm5mnP5UIXfYQ&s"
  },
  {
    id: "petrograd-1923",
    title: "Petrograd / Saint Petersburg (Liên Xô)",
    year: "30/06/1923",
    description:
      "Ngày 30/6/1923, sau khi rời Pháp qua Đức – Hà Lan, Nguyễn Ái Quốc đến Petrograd (Saint Petersburg), bắt đầu hòa nhập hoạt động ở Liên Xô, tham gia Quốc tế Cộng sản, học lý luận phương Đông.",
    lat: 59.93428,
    lng: 30.335099,
    img: "https://c8.alamy.com/comp/2HK3C4F/one-of-petrograds-well-built-railway-stations-russia-petrograd-st-petersburg-1923-2HK3C4F.jpg"
  },
  {
    id: "moscow-1924",
    title: "Mátxcơva (Liên Xô)",
    year: "1924 - 1927",
    description:
      "Giai đoạn 1924–1927, Nguyễn Ái Quốc học tại Trường Quốc tế Lênin, tham dự Đại hội V Quốc tế Cộng sản (1924), soạn thảo các luận đề về cách mạng thuộc địa.",
    lat: 55.755825,
    lng: 37.617298,
    img: "https://c8.alamy.com/comp/GG2BMP/lenins-funeral-in-moscow-1924-ussr-GG2BMP.jpg"
  },
  {
    id: "guangzhou-1924",
    title: "Quảng Châu (Trung Quốc)",
    year: "11/11/1924 - 04/1927",
    description:
      "Ngày 11/11/1924, Nguyễn Ái Quốc đến Quảng Châu, Trung Quốc — bắt đầu tổ chức hoạt động cách mạng, mở lớp huấn luyện cán bộ, ra báo Thanh Niên (21/6/1925).",
    lat: 23.12911,
    lng: 113.264385,
    img: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/1/18/21a0061d8de44cd6832848e9396d46af"
  },
  {
    id: "bangkok-1928",
    title: "Bangkok (Xiêm / Thái Lan)",
    year: "07/1928",
    description:
      "Tháng 7/1928, Nguyễn Ái Quốc từ Liên Xô đi qua Paris, Bỉ, Đức rồi lên tàu thủy từ Naples tới Xiêm (Thái Lan), hoạt động trong cộng đồng kiều bào vùng Đông Bắc Thái.",
    lat: 13.756331,
    lng: 100.501765,
    img: "https://c8.alamy.com/comp/2J2EWB6/bangkok-thailand-january-4-2010-phra-tinang-aporn-phimok-prasat-pavillion-in-the-grand-palace-in-bangkok-2J2EWB6.jpg"
  },
  {
    id: "hong-kong-1931",
    title: "Hồng Kông",
    year: "1931 - 1933",
    description:
      "Ngày 6/6/1931, Nguyễn Ái Quốc bị bắt tại Hồng Kông, giam 18 tháng tại nhà tù Victoria, đến 28/12/1932 được thả, tiếp tục hoạt động đến 1933.",
    lat: 22.3193039,
    lng: 114.1693611,
    img: "https://bhd.1cdn.vn/2021/06/04/files-library-images-ttxvn_0406_hong_kong.jpg"
  },
  {
    id: "shanghai-1933",
    title: "Thượng Hải (Trung Quốc)",
    year: "Cuối 1933",
    description:
      "Cuối năm 1933, Nguyễn Ái Quốc rời Hồng Kông bằng đường biển, đến Vladivostok rồi đi tàu hỏa đến Matxcơva. Ông từng hoạt động tại Thượng Hải trong giai đoạn 1930–1933.",
    lat: 31.230416,
    lng: 121.473701,
    img: "https://i0.wp.com/www.7dayadventurer.com/wp-content/uploads/2021/06/63D340E7-5ABA-45AA-B845-C8FB11A7C73A.png"
  },
  {
    id: "moscow-1934",
    title: "Mátxcơva (Liên Xô)",
    year: "1934 - 1938",
    description:
      "Giai đoạn 1934–1938, Nguyễn Ái Quốc học ở Trường Quốc tế Lênin, làm việc tại Viện Nghiên cứu các vấn đề dân tộc và thuộc địa.",
    lat: 55.755825,
    lng: 37.617298,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Triumphal_Arch_of_Moscow_1934.jpg"
  },
  {
    id: "queling-1938",
    title: "Quế Lâm (Trung Quốc)",
    year: "29/09/1938",
    description:
      "Ngày 29/9/1938, Nguyễn Ái Quốc rời Matxcơva đến Trung Quốc, liên lạc hợp tác với Bát Lộ Quân và các văn phòng cách mạng tại Quế Lâm.",
    lat: 25.273566,
    lng: 110.29002,
    img: "https://spirit.vietnamairlines.com/old/tintuc/NewsDK/11625/637249835213699906.jpeg"
  },
  {
    id: "kunming-1939",
    title: "Côn Minh (Vân Nam, Trung Quốc)",
    year: "1939 - 1940",
    description:
      "Trong thời gian từ 1938 đến 1940, Nguyễn Ái Quốc hoạt động ở nhiều tỉnh phía Nam Trung Quốc, thường xuyên có mặt tại Côn Minh để tổ chức và liên lạc cách mạng.",
    lat: 25.03889,
    lng: 102.71833,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56SpgalS8Ca2R3IMAVZgShUr8mdQE-7L65g&s"
  },
  {
    id: "pacbo-1941",
    title: "Pác Bó – Cao Bằng (Việt Nam)",
    year: "28/01/1941",
    description:
      "Ngày 28/1/1941, sau 30 năm bôn ba, Nguyễn Ái Quốc trở về nước qua cột mốc 108, khu vực Pác Bó (Cao Bằng). Tại đây, Người triển khai phong trào cách mạng, chuẩn bị cho Cách mạng Tháng Tám.",
    lat: 22.8509,
    lng: 106.2977,
    img: "https://nhandan.vn/special/ve-Pac-Bo-nho-Bac-Ho/assets/EoBeQGHSiR/ba-c-h-th-m-pa-c-bo-2-1961-1-2048x1360.jpg"
  }
];
