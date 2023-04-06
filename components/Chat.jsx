import Image from "next/image";
import styles from "../styles/components/chat.module.css";
export default function Chat() {
  return (
    <div className={styles.imageContainer}>
      <Image src="/images/chat.png" alt="chat-logo" width={20} height={19} />
    </div>
  );
}
