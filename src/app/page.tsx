"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./homepage.module.css";

// --- BƯỚC 1: Tách nội dung văn bản ra để dễ quản lý ---
const childhoodText = [
  `Nguyễn Ái Quốc (sau này là Chủ tịch Hồ Chí Minh) sinh ngày <strong>19/5/1890</strong> tại làng Kim Liên, xã Nam Liên, huyện Nam Đàn, tỉnh Nghệ An. Tên khai sinh là <strong>Nguyễn Sinh Cung</strong>, sau đổi thành <strong>Nguyễn Tất Thành</strong> khi đi học.`,
  `Cha là <strong>Nguyễn Sinh Sắc</strong>, một nhà nho yêu nước và từng đỗ Phó bảng; mẹ là <strong>Hoàng Thị Loan</strong>, người phụ nữ đảm đang, hiền hậu. Trong gia đình, Người có chị gái <strong>Nguyễn Thị Thanh</strong> và anh trai <strong>Nguyễn Sinh Khiêm</strong>.`,
  `Tuổi thơ của Người gắn liền với làng quê xứ Nghệ, trong môi trường giàu truyền thống nho học, lòng yêu nước và tinh thần dân tộc. Năm 1895, gia đình vào Huế, nơi Người được tiếp xúc với nền giáo dục mới và chứng kiến cảnh nước mất nhà tan, hun đúc trong Người khát vọng cứu nước từ rất sớm.`,
  `Đây chính là nền tảng hình thành tư tưởng, nhân cách của một lãnh tụ kiệt xuất sau này. Năm 1911, Nguyễn Tất Thành rời cảng Nhà Rồng, bắt đầu hành trình tìm đường cứu nước kéo dài hơn 30 năm.`
];

export default function Page() {
  const introRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const scrollToIntro = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <HeroSection onExploreClick={scrollToIntro} />

      {/* PHẦN GIỚI THIỆU TUỔI THƠ */}
      <section ref={introRef} className={styles.introSection}>
        <div className={styles.introContent}>
          <div className={styles.introText}>
            <div className={styles.introHeader}>
              <h2>Tuổi thơ của Nguyễn Ái Quốc</h2>
            </div>

            {/* --- BƯỚC 2: Thêm trình phát audio --- */}
            <audio ref={audioRef} controls className={styles.audioPlayer}>
              {/* Đặt file audio của bạn vào thư mục public/audio/tuoi-tho-bac.mp3 */}
              <source src="/audio/tuoitho.wav" type="audio/mpeg" />
              Trình duyệt của bạn không hỗ trợ phát audio.
            </audio>

            {/* Hiển thị văn bản từ hằng số đã tách */}
            {childhoodText.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          <div className={styles.introImage}>
            <Image
              src="https://bbt.1cdn.vn/2024/06/27/c025837938cb9b95c2da.jpg"
              alt="Tuổi thơ của Nguyễn Ái Quốc"
              width={500}
              height={400}
              className={styles.image}
            />
            <p className={styles.caption}>
              Hình minh họa: Làng Sen – quê hương Chủ tịch Hồ Chí Minh
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
