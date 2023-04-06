import styles from "../styles/components/video-card.module.css";

export default function VideoCard({ imageUrl }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="thumbnail" width={294} height={157} />
      </div>

      <div className={styles.infoContainer}>
        <button>2000x</button>
        <span>The dog house megaways</span>
      </div>
    </div>
  );
}
