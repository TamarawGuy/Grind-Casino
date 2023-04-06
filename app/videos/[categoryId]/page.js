import styles from "../../../styles/pages/videos-page.module.css";
import Chat from "../../../components/Chat";
import VideoCard from "../../../components/VideoCard";
import getVideos from "../../../lib/getVideos";

import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const words = params.categoryId.split("-");
  const title =
    words[0][0].toUpperCase() + words[0].substring(1) + " " + words[1];

  const staticParams = await generateStaticParams();

  const found = staticParams.find(
    (obj) => obj.categoryId === params.categoryId
  );

  if (!found) {
    return { title: "404 Not Found" };
  }
  return { title };
}

export default async function CategoryPage({ params }) {
  const videosData = await getVideos();
  const videos = videosData.products;

  const staticParams = await generateStaticParams();
  const found = staticParams.find(
    (obj) => obj.categoryId === params.categoryId
  );
  if (!found) {
    return notFound();
  }

  return (
    <>
      <div className={styles.container}>
        {videos.map((video) => (
          <VideoCard key={video.id} imageUrl={video.images[0]} />
        ))}
      </div>
      <Chat />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { categoryId: "latest-wins" },
    { categoryId: "biggest-wins" },
    { categoryId: "youtube-exclusives" },
  ];
}
