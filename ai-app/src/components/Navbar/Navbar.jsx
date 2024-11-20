import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div alt="Nav Container" className="flex justify-end items-center py-30 px-10p bg-gray-400">
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
            <div className="inline-block px-5">
              Home
            </div>
            <Link className="inline-block px-5" href="/about">
              Docs
            </Link>
          </div>
        </div>
        <div className="ml-5">
          <Link className="bg-gray-800 text-gray-300 rounded-full px-3.5 py-1.5 font-bold italic" href="/study">
            Start Studying
          </Link>
        </div>
      </div>
    </>
  );
}