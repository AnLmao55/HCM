"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from "./homepage.module.css";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className={styles.intro}>
        <h2>Hành trình 30 năm tìm đường cứu nước</h2>
        <p>
          Website này kể lại hành trình lịch sử vĩ đại của Chủ tịch Hồ Chí Minh
          qua các giai đoạn, địa điểm, tư tưởng và câu chuyện chân thực.
        </p>
        <div className={styles.buttons}>
          <Link href="/gioi-thieu" className={styles.btn}>Giới thiệu</Link>
          <Link href="/hanh-trinh" className={styles.btn}>Xem bản đồ</Link>
        </div>
      </section>
      <Timeline />
      <Footer />
    </>
  );
}
