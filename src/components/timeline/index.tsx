"use client";

import { timelineData } from "@/data/timelineData";
import styles from "./timeline.module.css";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="timeline" className={styles.timeline}>
      <h2 className={styles.title}>Dòng thời gian lịch sử</h2>
      <div className={styles.line}>
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.content}>
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
