import Link from "next/link";
import Logo from "public/images/logo.svg";
import FBLogo from "public/images/icon-facebook.svg";
import InstaLogo from "public/images/icon-instagram.svg";
import TwitterLogo from "public/images/icon-twitter.svg";
import PinterestLogo from "public/images/icon-pinterest.svg";

export default function Footer() {
    return (
      <div className="bg-viridian w-full flex flex-col items-center">
        <Logo className="mt-16" fill="#25564B" />
        <ul className="flex justify-between mt-12 mb-20 px-9 w-full font-semibold md:justify-center md:gap-12">
          <li>
            <Link href="#" className="text-viridian-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-viridian-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="text-viridian-300">
              Projects
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-5 mb-20 w-full font-bold">
          <FBLogo fill="#25564B"/>
          <InstaLogo fill="#25564B" />
          <TwitterLogo fill="#25564B" />
          <PinterestLogo fill="#25564B" />
        </div>
      </div>
    );
}