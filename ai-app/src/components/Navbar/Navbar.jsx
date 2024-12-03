import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div alt="Nav Container" className="flex justify-end items-center py-30 px-10p bg-gray-400 w-screen">
        <div className="logo mr-auto">
          <Image 
            src="/Calendar Icon.svg"
            alt="Calendar Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="links-container">
          <div className="links">
            <Link className="inline-block px-5 text-gray-950 font-semibold font-serif text-lg hover:opacity-40 active:opacity-10" href="/">
              Home
            </Link>
          </div>
        </div>
        <div className="ml-5">
          <Link className="bg-gray-800 text-gray-300 rounded-full px-3.5 py-1.5 font-bold italic font-serif hover:opacity-80 active:opacity-50" href="/study">
            Learn Now
          </Link>
        </div>
      </div>
    </>
  );
}