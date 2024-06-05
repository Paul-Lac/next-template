import { useEffect } from "react";
import Image from "next/image";

export default function IndexPage() {
  useEffect(() => console.log("index page did mount"), []);

  return (
    <>
      <h1>Welcome !</h1>
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Image
          className="welcomeImg"
          src="/images/coquelicot.jpg"
          height={244}
          width={304}
          alt="coquelicot"
        />
      </div>
    </>
  );
}
