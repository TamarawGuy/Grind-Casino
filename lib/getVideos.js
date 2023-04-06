export default async function getVideos() {
  const response = await fetch(`https://dummyjson.com/products?limit=9`);

  if (!response.ok) return undefined;

  return response.json();
}
