import { useEffect } from "react";
import { useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div className="w-2/3">Blogs{blogs.length}</div>;
}
