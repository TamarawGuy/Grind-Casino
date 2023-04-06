"use client";
import styles from "../styles/components/navbar.module.css";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }) {
  const segment = useSelectedLayoutSegment();
  const active = segment === href.split("/")[1];

  return (
    <Link href={href} className={active ? styles.active : ""}>
      {children}
    </Link>
  );
}
