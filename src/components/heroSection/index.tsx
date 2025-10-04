"use client";

import { motion } from "framer-motion";
import styles from "./index.module.css";

export default function HeroSection() {
  const handleScroll = () => {
    const nextSection = document.getElementById("timeline");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          “Không có gì quý hơn Độc Lập, Tự Do”
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hành trình 30 năm tìm đường cứu nước của Chủ tịch Hồ Chí Minh là bản
          hùng ca bất diệt của dân tộc Việt Nam.
        </motion.p>

        <motion.button
          className={styles.scrollBtn}
          onClick={handleScroll}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          ↓ Khám phá hành trình
        </motion.button>
      </div>
    </section>
  );
}
