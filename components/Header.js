import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav>
      <Link id="logo" href="/">
        <Image src="/images/flower.png" alt="logo" height={24} width={24} />
      </Link>
      <div className="links-container">
        <Link className="link" href="/About">
          About us
        </Link>
        <Link className="link" href="/TermsOfUse">
          Terms of Use
        </Link>
      </div>
    </nav>
  );
}
