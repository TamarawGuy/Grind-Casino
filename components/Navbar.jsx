"use client";
import styles from "../styles/components/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState(-1);
  return (
    <nav className={styles.navigation}>
      <div className={styles.leftNavigation}>
        <ul>
          <li onClick={() => setSelectedLink(-1)}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={20.4}
                height={20.4}
              />
            </Link>
          </li>
          <li
            className={selectedLink === 0 ? styles.active : ""}
            onClick={() => setSelectedLink(0)}
          >
            <Link href="/">Casino Bonus</Link>
          </li>
          <li
            className={selectedLink === 1 ? styles.active : ""}
            onClick={() => setSelectedLink(1)}
          >
            <Link href="/videos/latest-wins">Videos</Link>
          </li>
          <li
            className={selectedLink === 2 ? styles.active : ""}
            onClick={() => setSelectedLink(2)}
          >
            <Link href="/">Stream</Link>
          </li>
          <li
            className={selectedLink === 3 ? styles.active : ""}
            onClick={() => setSelectedLink(3)}
          >
            <Link href="/">Tournaments</Link>
          </li>
        </ul>
      </div>

      <div className={styles.rightNavigation}>
        <div className={styles.storeContainer}>
          <div className={styles.moneyContainer}>
            <Image
              src="/images/star.png"
              alt="star-icon"
              width={14}
              height={14}
            />
            <span>5,245,652</span>
            <button>Store</button>
          </div>
        </div>
        <div className={styles.profileContainer}>
          <Image
            src="/images/profile.png"
            alt="profile"
            width={30}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
}
