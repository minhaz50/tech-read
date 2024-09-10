import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readTime }) {
  return (
    <div className=" md:w-1/3 bg-green-900 ml-5">
      <h1>Total read Time : {readTime}</h1>
      <h1 className=" ml-36 mt-8">Saved Blog: {bookmarks.length}</h1>
      {bookmarks.map((bookmark, i) => (
        <Bookmark key={i} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}
