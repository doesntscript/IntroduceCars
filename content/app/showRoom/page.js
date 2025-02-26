import Link from "next/link";


export default function ShowRoom() {
  return (
    <>
    <main>
        <h1>The ShowRoom</h1>
        <p><Link href="/showRoom/post-1" >Post 1</Link></p>
        <p><Link href="/showRoom/post-2" >Post 2</Link></p>
    </main>
    </>
  );
}
