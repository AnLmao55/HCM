"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./tutuong.module.css";

const stages = [
  { id: "stage-1", title: "I. Chặng 1 (1911): Từ cảng Sài Gòn đến Le Havre" },
  { id: "stage-2", title: "II. Chặng 2 (1912–1913): Hành trình vòng quanh châu Phi" },
  { id: "stage-3", title: "III. Chặng 3 (1913–1917): Pháp – Châu Mỹ – Anh" },
  { id: "stage-4", title: "IV. Chặng 4 (1917–1923): Pháp – Liên Xô" },
  { id: "stage-5", title: "V. Chặng 5 (1924–1927): Liên Xô – Quảng Châu (Trung Quốc)" },
  { id: "stage-6", title: "VI. Chặng 6 (1927–1929): Liên Xô – Xiêm (Thái Lan)" },
  { id: "stage-7", title: "VII. Chặng 7 (1929–1933): Hồng Kông – Thượng Hải" },
  { id: "stage-8", title: "VIII. Chặng 8 (1933–1938): Thượng Hải – Liên Xô" },
  { id: "stage-9", title: "IX. Chặng 9 (1938–1940): Liên Xô – Quế Lâm (Trung Quốc)" },
  { id: "stage-10", title: "X. Chặng 10 (1940–1941): Quế Lâm – Pác Bó (Cao Bằng)" },
  { id: "conclusion", title: "Kết luận" },
];

export default function TuTuongPage() {
  const [activeId, setActiveId] = useState("stage-1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);
        if (intersectingEntries.length > 0) {
          // Sort entries by their position on the page to get the topmost one
          intersectingEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(intersectingEntries[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    stages.forEach((stage) => {
      const el = document.getElementById(stage.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSidebarClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles.pageWrapper}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-600" />
            Mục lục
          </h2>
          <nav className="relative pl-3">
            {/* thanh đỏ dọc */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            <ul className="space-y-2">
              {stages.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => handleSidebarClick(e, s.id)}
                    className={`${styles.sidebarLink} ${
                      activeId === s.id
                        ? "bg-red-500 text-white font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* MAIN TIMELINE */}
        <div className={styles.mainContent}>
          {/* timeline line */}
          <div className="absolute left-3 top-0 w-[2px] h-full bg-gray-200 md:left-0"></div>

          <div className="space-y-12">
            <TimelineSection id="stage-1" title={stages[0].title}>
              <p>Ngày 5 tháng 6 năm 1911, Nguyễn Tất Thành rời bến cảng Nhà Rồng (Sài Gòn) trên con tàu Amiral Latouche-Tréville, khởi đầu hành trình tìm đường cứu nước. Trên đường đi qua Singapore, Sri Lanka, Ai Cập, Marseille và Le Havre (Pháp), Người quan sát và học hỏi nhiều điều mới lạ của thế giới.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng hình thành trong giai đoạn này:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Từ lòng yêu nước sâu sắc, Người bắt đầu ý thức được rằng con đường cứu nước cũ (như con đường của Phan Bội Châu, Phan Châu Trinh) đều không thành công.</li>
                <li>Qua tiếp xúc với các tầng lớp lao động bị bóc lột, Người nhận ra rằng sự áp bức không chỉ tồn tại ở Việt Nam mà còn diễn ra ở nhiều dân tộc bị đô hộ khác.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                Từ đó, Người rút ra kết luận ban đầu: “Ở đâu có áp bức, ở đó có đấu tranh.” Đây là bước khởi đầu cho sự hình thành tư tưởng quốc tế và nhân văn của Người.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-2" title={stages[1].title}>
              <p>Sau khi đến Pháp, Nguyễn Tất Thành làm thuê trên tàu của hãng Chargeurs Réunis chạy ven bờ châu Phi, qua các cảng Port Said (Ai Cập), Algiers (Algérie), Dakar (Senegal), Congo, Nam Phi…</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Người tận mắt chứng kiến cảnh người da đen, người Ả Rập và dân bản địa bị áp bức, bị coi thường bởi thực dân Pháp.</li>
                <li>Qua đó, Người thấy rõ bản chất tàn bạo, bất công và giả dối của chủ nghĩa thực dân – vốn nhân danh “văn minh khai hóa”.</li>
                <li>Từ đó, tư tưởng của Người phát triển từ lòng yêu nước đến ý thức đoàn kết với các dân tộc bị áp bức khác. Người bắt đầu hiểu rằng cách mạng Việt Nam phải gắn liền với phong trào cách mạng thế giới.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Các dân tộc thuộc địa có chung một kẻ thù là chủ nghĩa thực dân; muốn giải phóng dân tộc phải đoàn kết với các dân tộc bị áp bức khác.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-3" title={stages[2].title}>
              <p>Nguyễn Tất Thành tiếp tục đi qua châu Mỹ (Martinique, Uruguay, Argentina, Hoa Kỳ) rồi đến Anh. Trong thời gian này, Người lao động như một người dân bình thường: làm vườn, phụ bếp, công nhân cảng, và dành nhiều thời gian tự học.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Người quan sát thấy xã hội tư bản phát triển nhưng vẫn tồn tại cảnh người bóc lột người, sự phân biệt giàu nghèo rõ rệt.</li>
                <li>Trong khi đó, các khẩu hiệu “Tự do, Bình đẳng, Bác ái” mà phương Tây rêu rao chỉ mang tính hình thức.</li>
                <li>Qua việc đọc sách ở Thư viện Anh quốc, Người dần tiếp cận tư tưởng của các nhà khai sáng và triết học châu Âu, mở rộng tầm nhìn về chính trị, xã hội và con người.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Chỉ có thay đổi tận gốc chế độ xã hội bất công thì nhân dân mới thật sự có tự do; tự do của nhân loại phải gắn với tự do của dân tộc bị áp bức.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-4" title={stages[3].title}>
              <p>Sau Chiến tranh thế giới thứ nhất, Người trở lại Pháp, tham gia hoạt động trong Hội Việt kiều yêu nước, viết báo, tổ chức biểu tình đòi quyền tự quyết cho dân tộc Việt Nam. Năm 1919, với tên Nguyễn Ái Quốc, Người gửi “Bản yêu sách của nhân dân An Nam” tới Hội nghị Versailles. Năm 1920, Người đọc “Luận cương về vấn đề dân tộc và thuộc địa” của Lênin, từ đó tìm thấy con đường cứu nước đúng đắn.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Đây là bước ngoặt căn bản trong đời hoạt động của Hồ Chí Minh. Người từ chủ nghĩa yêu nước chuyển sang chủ nghĩa Mác – Lênin.</li>
                <li>Người khẳng định: chỉ có cách mạng vô sản mới có thể giải phóng dân tộc bị áp bức.</li>
                <li>Người trở thành người cộng sản đầu tiên của Việt Nam và sáng lập báo Le Paria (Người cùng khổ) để cổ vũ phong trào đấu tranh của các dân tộc thuộc địa.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-5" title={stages[4].title}>
              <p>Sau khi học tập ở Liên Xô, Hồ Chí Minh đến Quảng Châu, mở lớp huấn luyện thanh niên, sáng lập “Hội Việt Nam Cách mạng Thanh niên” (1925) và ra báo Thanh Niên.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Người vận dụng sáng tạo chủ nghĩa Mác – Lênin vào thực tiễn Việt Nam, nhấn mạnh vai trò của quần chúng nhân dân và đặc biệt là thanh niên.</li>
                <li>Xây dựng lực lượng cách mạng, chuẩn bị tư tưởng và tổ chức cho việc thành lập Đảng Cộng sản Việt Nam.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Cách mạng là sự nghiệp của quần chúng nhân dân; muốn thắng lợi phải có tổ chức và lãnh đạo đúng đắn.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-6" title={stages[5].title}>
              <p>Người rời Quảng Châu để tránh khủng bố của Tưởng Giới Thạch, sang Thái Lan hoạt động trong kiều bào, gây dựng phong trào yêu nước.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Tư tưởng “lấy dân làm gốc” được củng cố và thực hành thông qua việc trực tiếp tổ chức, giáo dục và giác ngộ quần chúng.</li>
                <li>Người tin tưởng sâu sắc rằng: sự nghiệp giải phóng dân tộc phải do chính dân tộc đó thực hiện.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Đem sức ta mà tự giải phóng cho ta; dân tộc phải tự đứng lên giành độc lập.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-7" title={stages[6].title}>
              <p>Tại Hồng Kông, Người chủ trì hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam (3/2/1930), thông qua Cương lĩnh đầu tiên của Đảng. Sau đó, Người bị chính quyền Anh bắt giam và bị tù hơn một năm.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Người kiểm nghiệm trong thực tiễn tính đúng đắn của con đường cách mạng vô sản.</li>
                <li>Trong tù, Người vẫn kiên định niềm tin, thể hiện tinh thần lạc quan cách mạng và niềm tin vào nhân dân.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Kiên định mục tiêu độc lập dân tộc, tự do và hạnh phúc cho nhân dân dù trong bất kỳ hoàn cảnh nào.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="stage-8" title={stages[7].title}>
              <p>Người trở lại Liên Xô, tiếp tục nghiên cứu và làm việc tại Viện Nghiên cứu các vấn đề dân tộc và thuộc địa. Dù bị phê phán, Người vẫn giữ vững quan điểm: ở các nước thuộc địa, nhiệm vụ hàng đầu là giải phóng dân tộc.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Hình thành rõ nét tư tưởng “giải phóng dân tộc gắn liền với cách mạng xã hội chủ nghĩa”.</li>
                <li>Người chứng minh bằng lý luận và thực tiễn rằng, giải phóng dân tộc là bước đi đầu tiên tiến tới giải phóng giai cấp.</li>
              </ul>
            </TimelineSection>

            <TimelineSection id="stage-9" title={stages[8].title}>
              <p>Người trở lại Trung Quốc, liên hệ với các tổ chức cách mạng, chuẩn bị cho việc khởi nghĩa trong nước.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Hình thành tư duy chiến lược về việc kết hợp giữa đấu tranh chính trị và đấu tranh vũ trang.</li>
                <li>Đặt nền móng cho đường lối cách mạng giải phóng dân tộc ở Việt Nam.</li>
              </ul>
            </TimelineSection>

            <TimelineSection id="stage-10" title={stages[9].title}>
              <p>Ngày 28 tháng 1 năm 1941, Hồ Chí Minh trở về Tổ quốc sau 30 năm bôn ba. Tại Pác Bó, Người trực tiếp lãnh đạo phong trào cách mạng, chuẩn bị Tổng khởi nghĩa tháng Tám năm 1945.</p>
              <h4 className="font-semibold mt-3 mb-1">Nhận thức và tư tưởng:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Toàn bộ quá trình 30 năm đã giúp Người hoàn thiện tư tưởng cách mạng: độc lập dân tộc phải gắn liền với chủ nghĩa xã hội.</li>
                <li>Người xác định rõ vai trò của Đảng Cộng sản, của quần chúng nhân dân và con đường phát triển của dân tộc Việt Nam.</li>
              </ul>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic">
                <strong>Tư tưởng rút ra:</strong> Độc lập dân tộc là điều kiện tiên quyết, nhưng chỉ có chủ nghĩa xã hội mới đảm bảo cho độc lập ấy bền vững và hạnh phúc của nhân dân được thực hiện.
              </blockquote>
            </TimelineSection>

            <TimelineSection id="conclusion" title={stages[10].title}>
              <p>Trong 30 năm bôn ba tìm đường cứu nước, Hồ Chí Minh đã đi từ một thanh niên yêu nước trở thành một nhà cách mạng vô sản kiên định, từ tình cảm dân tộc phát triển thành lý tưởng quốc tế cao cả.</p>
              <p className="mt-2">Người đã tìm ra con đường cách mạng đúng đắn cho dân tộc Việt Nam:</p>
              <blockquote className="mt-2 pl-4 border-l-4 border-red-200 italic font-medium">
                Độc lập dân tộc gắn liền với chủ nghĩa xã hội, dưới sự lãnh đạo của Đảng Cộng sản và dựa trên sức mạnh của nhân dân.
              </blockquote>
            </TimelineSection>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function TimelineSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 relative pl-10 md:pl-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* chấm đỏ */}
      <div className="absolute left-2 top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-md md:left-[-9px]"></div>
      <h2 className="text-xl font-semibold text-red-600 mb-2">{title}</h2>
      <div className="bg-white p-4 rounded-xl shadow-md space-y-2 text-gray-800 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}
