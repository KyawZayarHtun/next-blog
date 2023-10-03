import React from 'react';
import styles from './navbar.module.css';
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import AuthLinks from "@/components/authLinks/AuthLinks";

const Navbar = () => {
  return (
    <nav className={ styles.container }>
      <div className={ styles.social }>
        <Image src="/facebook.png" alt="Facebook Link" width={ 24 } height={ 24 } />
        <Image src="/instagram.png" alt="Instagram Link" width={ 24 } height={ 24 } />
        <Image src="/tiktok.png" alt="Tiktok Link" width={ 24 } height={ 24 } />
        <Image src="/youtube.png" alt="Youtube Link" width={ 24 } height={ 24 } />
      </div>
      <div className={ styles.logo }>
        lamablog
      </div>
      <div className={ styles.links }>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </nav>
  );
};

export default Navbar;