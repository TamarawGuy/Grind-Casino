"use client";
import styles from "../styles/components/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.leftNavigation}>
        <ul>
          <li>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={20.4}
                height={20.4}
              />
            </Link>
          </li>
          <li>
            <NavLink href="/casino">Casino Bonus</NavLink>
          </li>
          <li>
            <NavLink href="/videos/latest-wins">Videos</NavLink>
          </li>
          <li>
            <NavLink href="/stream">Stream</NavLink>
          </li>
          <li>
            <NavLink href="/tournaments">Tournaments</NavLink>
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
