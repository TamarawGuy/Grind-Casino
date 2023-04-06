"use client";
import SearchLink from "./SearchLink";
import styles from "../styles/components/search.module.css";
import { BiSearch } from "react-icons/bi";
import { useSelectedLayoutSegment } from "next/navigation";
import getInputPlaceholder from "../lib/getInputPlaceholder";

export default function Search() {
  const segment = useSelectedLayoutSegment();
  const inputPlaceholder = getInputPlaceholder(segment);

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
        <SearchLink href="/videos/latest-wins">Latest Wins</SearchLink>
        <SearchLink href="/videos/biggest-wins">Biggest Wins</SearchLink>
        <SearchLink href="/videos/youtube-exclusives">
          Youtube Exclusives
        </SearchLink>
      </div>
    </section>
  );
}
