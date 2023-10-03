"use client"

import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext)

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={theme === "dark"
             ? {background: "#ffffff"}
             : {background: "#0f172a"}}>
      <Image src="/moon.png" alt="Moon Logo" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "dark"
               ? {left: 3, background: "#0f172a"}
               : {right: 3, background: "#ffffff"}} />
      <Image src="/sun.png" alt="Sun Logo" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;