import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({ handleAddToBookmark, handleToReadTime }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {/* <h1 className="my-4 text-2xl uppercase italic text-gray-800 text-center">
        Total Number Of Blogs: {blogs.length}
      </h1> */}
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleAddToBookmark={handleAddToBookmark}
          handleToReadTime={handleToReadTime}
        />
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleToReadTime: PropTypes.func,
};
