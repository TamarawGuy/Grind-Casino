"use client";
import Link from "next/link";
import styles from "../styles/components/search.module.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function Search({ inputPlaceholder }) {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <section className={styles.searchContainer}>
      <div className={styles.titleContainer}>
        <h1>Videos and Big wins</h1>
      </div>

      <div className={styles.inputContainer}>
        <i className={styles.iconContainer}>
          <BiSearch size={20} color="white" />
        </i>
        <input type="text" placeholder={inputPlaceholder} />
      </div>
      <div className={styles.btnsContainer}>
        <Link
          className={selectedButton === 0 ? styles.activeButton : ""}
          onClick={() => setSelectedButton(0)}
          href="/videos/latest-wins"
        >
          Latest Wins
        </Link>
        <Link
          className={selectedButton === 1 ? styles.activeButton : ""}
          onClick={() => setSelectedButton(1)}
          href="/videos/biggest-wins"
        >
          Biggest Wins
        </Link>
        <Link
          className={selectedButton === 2 ? styles.activeButton : ""}
          onClick={() => setSelectedButton(2)}
          href="/videos/youtube-exclusives"
        >
          Youtube Exclusives
        </Link>
      </div>
    </section>
  );
}
