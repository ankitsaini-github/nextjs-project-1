import Link from "next/link";

export default function AboutusPage(){
  return <>
    <h1>aboutus</h1>
    <ul>
      <li><Link href={'/aboutus/1'}>Yash</Link></li>
      <li><Link href={'/aboutus/2'}>Vaibhav</Link></li>
      <li><Link href={'/aboutus/3'}>Suresh</Link></li>
    </ul>
  </>
}