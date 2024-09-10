import profile from "../../assets/images/profile-1.jpg";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1>
        <span className=" text-orange-500 font-bold text-2xl tracking-wide">
          TecH
        </span>
        <span className="text-black text-xl tracking-widest pl-1 font-thin ">
          read
        </span>
      </h1>
      <img src={profile} alt="" className="w-12 h-11 rounded-full" />
    </header>
  );
}
