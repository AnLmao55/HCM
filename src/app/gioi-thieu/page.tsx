"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import styles from "./gioithieu.module.css";
import Footer from "@/components/footer";

export default function GioiThieuPage() {
  return (
    <>
      <Navbar />
      <motion.main
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Giới thiệu</h1>

        <section className={styles.section}>
          <h2>I. Khởi nguồn lý tưởng và lòng yêu nước (trước 1911)</h2>
          <p>
            Bác Hồ sinh ngày 19 tháng 5 năm 1890, tên thời thơ ấu là Nguyễn Sinh Cung, tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Gia đình thuộc dòng Nho, gốc nông dân, có truyền thống hiếu học và lòng yêu nước. Cha là ông Nguyễn Sinh Sắc — người từng đỗ Phó bảng và nhiều lần bị đàn áp, mẹ là bà Hoàng Thị Loan — người đảm đang, nuôi dạy con cái trong truyền thống nhân nghĩa.
          </p>
          <p>
            Từ nhỏ, Bác đã được giáo dục về đạo lý “trọng nghĩa khinh tài”, tinh thần tự lập, biết vượt khó và có ý thức về quê hương, dân tộc. Những chuyến đi theo cha qua các di tích lịch sử, lời dạy trong gia đình đã gieo mầm khát vọng làm người có ích cho đất nước.
          </p>
        </section>

        <section className={styles.section}>
          <h2>II. Ra đi tìm đường cứu nước (1911–1920)</h2>
          <p>
            Ngày 5 tháng 6 năm 1911, tại Bến Nhà Rồng (Sài Gòn), Nguyễn Tất Thành — với tên mới là Văn Ba — đã lên con tàu <strong>Amiral Latouche Tréville</strong>, bắt đầu cuộc hành trình vĩ đại tìm đường cứu nước.
          </p>
          <p>
            Trong những năm đầu ra nước ngoài, Bác làm nhiều nghề (phụ bếp, lao động, làm vườn…) để mưu sinh, đồng thời học hỏi ngôn ngữ, văn hóa, quan sát đời sống, tìm hiểu các chế độ pháp luật và hệ thống chính trị các quốc gia phương Tây.
          </p>
        </section>

        <section className={styles.section}>
          <h2>III. Hình thành tư tưởng cách mạng Việt Nam (1920–1930)</h2>
          <p>
            Vào khoảng năm 1920, Bác tiếp xúc và nghiên cứu chủ nghĩa Mác–Lênin, khảo sát lý luận cách mạng vô sản. Người gia nhập Quốc tế Cộng sản và hoạt động tại các quốc gia như Pháp, Nga, Trung Quốc.
          </p>
          <p>
            Năm 1925, Bác sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu, mở lớp đào tạo cán bộ, tổ chức lực lượng cách mạng. Trong thời kỳ này, Bác viết nhiều tác phẩm quan trọng như <em>“Bản án chế độ thực dân Pháp”</em>, <em>“Đường Kách mệnh”</em>, truyền bá lý luận cách mạng vào phong trào cách mạng Việt Nam.
          </p>
        </section>

        <section className={styles.section}>
          <h2>IV. Giai đoạn 1930 – 1941</h2>
          <p>
            Từ năm 1930 đến 1941 là giai đoạn Bác hoạt động bí mật, chịu đựng tù đày, vượt qua thử thách để bảo vệ lập trường cách mạng. Ngày 28 tháng 1 năm 1941, sau gần 30 năm ra đi, Bác vượt cột mốc 108 tại biên giới Việt – Trung, về nước tại Pác Bó (Cao Bằng), bắt đầu lãnh đạo cách mạng trực tiếp trong nước.
          </p>
        </section>

        <section className={styles.section}>
          <h2>V. Độc lập dân tộc — Tự do — Hạnh phúc</h2>
          <p>
            Câu nói nổi tiếng “Không có gì quý hơn độc lập, tự do” — được Bác Hồ phát biểu năm 1966 — không chỉ là khẩu hiệu mà là tinh hoa tư tưởng từ quá trình tranh đấu gian khổ và rèn luyện suốt đời của Người.
          </p>
          <p>
            Theo Bác, <strong>độc lập</strong> phải là độc lập thực sự, toàn diện — không chịu chi phối bên ngoài; <strong>tự do</strong> gắn liền với quyền con người, quyền dân tộc; và <strong>hạnh phúc</strong> là mục tiêu thiết thực, làm sao để đồng bào được ấm no, được học, được sống trong tự do.
          </p>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
