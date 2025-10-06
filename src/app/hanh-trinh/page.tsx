"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./hanhtrinh.module.css";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// 🧠 Import WorldMap theo kiểu dynamic để tắt SSR
const WorldMap = dynamic(() => import("@/components/worldmap"), { ssr: false });

export default function HanhTrinhPage() {
  return (
    <>
      <Navbar />
      <motion.main
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        

        <div className={styles.mapWrapper}>
          <WorldMap />
        </div>

        
      </motion.main>
      <Footer />
    </>
  );
}
