"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "../styles/components/search.module.css";
import Link from "next/link";

export default function SearchLink({ href, children }) {
  const segment = useSelectedLayoutSegment();
  //   console.log(segment);
  //   console.log(href);
  const active = `/videos/${segment}` === href;

  return (
    <Link href={href} className={active ? styles.active : ""}>
      {children}
    </Link>
  );
}
