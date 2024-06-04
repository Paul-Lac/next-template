import { useEffect } from "react";
import Link from "next/link";

export default function IndexPage() {
  useEffect(() => console.log("index page did mount"), []);

  return (
    <>
      <h1>Welcome !</h1>
      <p>Please visit these two pages</p>
      <Link href="/About">About us</Link>
      <Link href="/TermsOfUse">Terms of Use</Link>
    </>
  );
}
