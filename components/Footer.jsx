import Image from "next/image";
import styles from "../styles/components/footer.module.css";
import Link from "next/link";
import AdditionalFooterInfo from "./AdditionalFooterInfo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftFooter}>
        <div className={styles.imagesContainer}>
          <Link href="/">
            <Image
              src="/images/kick-fav.png"
              alt="kick-fav-logo"
              width={29}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/discord.png"
              alt="discord-logo"
              width={31}
              height={31}
            />
          </Link>

          <Link href="/">
            <Image
              src="/images/youtube.png"
              alt="youtube-logo"
              width={32}
              height={27}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/twitter.png"
              alt="twitter-logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/facebook.png"
              alt="facebook-logo"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/instagram.png"
              alt="instagram-logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <AdditionalFooterInfo />
        </div>
      </div>

      <div className={styles.rightFooter}>
        <div className={styles.leftLinks}>
          <h3>ClassyBeef</h3>
          <p>News</p>
          <p>About Us</p>
          <p>Live support</p>
        </div>

        <div className={styles.rightLinks}>
          <h3>Legal Stuff</h3>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>
      </div>
      <div className={styles.showInfo}>
        <hr />
        <AdditionalFooterInfo />
      </div>
    </footer>
  );
}
