"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./tutuong.module.css";
import { motion } from "framer-motion";

export default function TuTuongPage() {
  return (
    <>
      <Navbar />
      <motion.main
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Tư tưởng “Không có gì quý hơn độc lập, tự do”</h1>

        <section className={styles.section}>
          <h2>1. Độc lập dân tộc và tự do nhân dân</h2>
          <p>
            Trong hệ thống tư tưởng Hồ Chí Minh, <strong>độc lập dân tộc</strong> là trụ cột đầu tiên — nếu không có độc lập quốc gia, thì không thể nói đến tự do, hạnh phúc cho nhân dân.
          </p>
          <p>
            Bác từng nói: “Độc lập nghĩa là chúng tôi điều khiển lấy mọi công việc của chúng tôi, không có sự can thiệp ở ngoài vào”.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Tự do gắn liền quyền con người và quyền dân tộc</h2>
          <p>
            Bác Hồ nhấn mạnh rằng tự do không chỉ là không bị áp bức, mà còn là quyền được sở hữu về tư tưởng, tự chủ về tinh thần và vật chất. “Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi” là lời khẳng định sâu sắc về mối quan hệ giữa cá nhân và dân tộc.
          </p>
          <p>
            Bác cũng tiếp thu tư tưởng quốc tế, như Tuyên ngôn Độc lập 1776 của Mỹ, Tuyên ngôn nhân quyền Pháp, để đối chiếu và vận dụng phù hợp vào điều kiện Việt Nam.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Độc lập — Tự chủ — Tự lực, tự cường</h2>
          <p>
            Bác Hồ khẳng định rằng độc lập không phải là biệt lập, mà phải <strong>tự chủ</strong> — nghĩa là chủ động trong suy nghĩ, chủ động giải quyết vấn đề của mình mà không lệ thuộc vào bên ngoài.
          </p>
          <p>
            Đồng thời, Bác đề cao tinh thần <strong>tự lực, tự cường</strong> — dân tộc phải dựa vào sức mình để giữ vững độc lập, phát triển quốc gia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Đối ngoại hòa bình, bạn bè quốc tế</h2>
          <p>
            Trong quan hệ quốc tế, tư tưởng “Không có gì quý hơn độc lập, tự do” được ứng dụng vào đường lối đối ngoại: “làm bạn với tất cả các nước dân chủ và không gây thù oán với một ai”.
          </p>
          <p>
            Bác nhấn mạnh độc lập dân tộc trong đối ngoại là không áp đặt, không chạy theo, không lệ thuộc; nhưng vẫn phải kết hợp với bạn bè quốc tế và hoà bình.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Ứng dụng trong thời đại hôm nay</h2>
          <p>
            Trong công cuộc xây dựng và bảo vệ Tổ quốc, tư tưởng này vẫn giữ nguyên giá trị. Độc lập, tự do phải được thể chế hóa bằng luật pháp, trở thành quyền của nhân dân.
          </p>
          <p>
            Hơn nữa, độc lập dân tộc phải luôn gắn với phát triển kinh tế — làm sao để nhân dân có ăn, mặc, học hành — đó mới thực sự là tự do, hạnh phúc.
          </p>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
