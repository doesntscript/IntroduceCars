import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to Introduce Show Cars!</h1>
      <p>🔥 Let&apos;s see the beuatiful Design cd ! 🔥</p>
      <p> <Link href="/about" >About Us</Link></p>
    </main>
  );
}
