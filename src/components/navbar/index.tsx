"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className={styles.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <Link href="/">Hành Trình 30 Năm</Link>
      </motion.div>

      <ul className={styles.navLinks}>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? styles.active : ""}
          >
            Trang chủ
          </Link>
        </li>
        {/* <li>
          <Link
            href="/gioi-thieu"
            className={pathname === "/gioi-thieu" ? styles.active : ""}
          >
            Giới thiệu
          </Link>
        </li> */}
        <li>
          <Link
            href="/hanh-trinh"
            className={pathname === "/hanh-trinh" ? styles.active : ""}
          >
            Hành trình
          </Link>
        </li>
        {/* <li>
          <Link
            href="/cau-chuyen"
            className={pathname === "/cau-chuyen" ? styles.active : ""}
          >
            Câu chuyện
          </Link>
        </li> */}
        <li>
          <Link
            href="/tu-tuong"
            className={pathname === "/tu-tuong" ? styles.active : ""}
          >
            Tư tưởng
          </Link>
        </li>
        <li>
          <Link
            href="/thong-tin-nhom-va-ai"
            className={pathname === "/thong-tin-nhom-va-ai" ? styles.active : ""}
          >
            Thông tin nhóm & AI
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
