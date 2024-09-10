import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleToReadTime = (time) => {
    setReadTime(readTime + time);
  };

  return (
    <div className="bg-green-400 bg-opacity-0.1">
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleToReadTime={handleToReadTime}
        />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
    </div>
  );
}

export default App;
