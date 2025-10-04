"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./cauchuyen.module.css";
import { motion } from "framer-motion";

export default function CauChuyenPage() {
  return (
    <>
      <Navbar />
      <motion.main
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Câu chuyện 30 năm tìm đường cứu nước</h1>

        {/* Giai đoạn I */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            I. Khởi nguồn lý tưởng và lòng yêu nước (trước 1911)
          </h2>
          <p className={styles.sectionText}>
            Bác Hồ sinh ngày 19 tháng 5 năm 1890, tên thời thơ ấu là Nguyễn Sinh Cung,
            tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Gia đình thuộc
            dòng Nho, gốc nông dân, có truyền thống hiếu học và yêu nước.
          </p>
        </section>

        {/* Giai đoạn II */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>II. Ra đi tìm đường cứu nước (1911–1920)</h2>
          <p className={styles.sectionText}>
            Ngày 5/6/1911, từ bến Nhà Rồng, Nguyễn Tất Thành xuống tàu Amiral Latouche-Tréville,
            bắt đầu cuộc hành trình vĩ đại ra đi tìm đường cứu nước. Người trải qua nhiều quốc gia,
            làm nhiều nghề để sinh sống, học hỏi và quan sát xã hội phương Tây.
          </p>
        </section>

        {/* Giai đoạn III */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            III. Hình thành tư tưởng cách mạng Việt Nam (1920–1930)
          </h2>
          <p className={styles.sectionText}>
            Trong thời gian hoạt động ở Pháp và Liên Xô, Người tiếp thu chủ nghĩa Mác – Lênin
            và xác định con đường giải phóng dân tộc theo cách mạng vô sản. Năm 1925, Bác sáng lập
            Hội Việt Nam Cách mạng Thanh niên, mở lớp huấn luyện tại Quảng Châu.
          </p>
        </section>

        {/* Giai đoạn IV */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            IV. Trui rèn trong gian khổ, bảo vệ tư tưởng độc lập (1930–1941)
          </h2>
          <p className={styles.sectionText}>
            Giai đoạn hoạt động bí mật, bị tù đày, nhưng Người vẫn kiên định lập trường cách mạng.
            Năm 1941, Bác trở về nước, trực tiếp lãnh đạo phong trào cách mạng.
          </p>
        </section>

        {/* Giai đoạn V */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            V. Trở về tổ quốc, lãnh đạo trực tiếp (1941–1945)
          </h2>
          <p className={styles.sectionText}>
            Sau khi về nước, Người chỉ đạo thành lập Mặt trận Việt Minh, xây dựng căn cứ địa cách mạng
            và lãnh đạo cuộc Tổng khởi nghĩa tháng Tám thành công.
          </p>
        </section>

        {/* Giai đoạn VI */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>VI. Kết luận: Bản hùng ca dân tộc</h2>
          <p className={styles.sectionText}>
            Hành trình 30 năm tìm đường cứu nước là bản anh hùng ca của lòng yêu nước,
            trí tuệ và ý chí kiên định. Câu nói “Không có gì quý hơn độc lập, tự do”
            là kết tinh tư tưởng ấy.
          </p>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
