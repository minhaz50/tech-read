export default function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="bg-green-600 p-4 m-4 ">
      <h2 className="">{title}</h2>
    </div>
  );
}
