import Search from "../../components/Search";

export default function VideosLayout({ children }) {
  return (
    <>
      <Search />
      {children}
    </>
  );
}
