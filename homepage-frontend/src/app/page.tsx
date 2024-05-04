import Link from 'next/link'

export default function Home() {
  return (
    <div>
        Test home page you can access about page<br></br>
        <Link href="/about">Go to about page - Click here</Link>
      </div>
  );
}
