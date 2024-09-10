import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
export default function Blog({ blog, handleAddToBookmark, handleToReadTime }) {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-4">
      <img
        src={cover}
        alt={`Cover Picture Of The Title ${title}`}
        className="w-full rounded-md"
      />
      <div className="flex justify-between mt-8">
        <div className="flex pl-3 ">
          <img src={author_img} alt="" className="w-10 rounded-full" />
          <div className="ml-2 ">
            <h6 className="font-bold text-sm tracking-tighter">{author}</h6>
            <span className="text-sm">{posted_date}</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-sm">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-red-700 font-bold text-2xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl w-full mt-7 pl-3">{title}</h2>
      <p>
        {hashtags.map((hash, i) => (
          <span key={i} className="pl-3">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() => handleToReadTime(reading_time)}>
        Mark as read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
