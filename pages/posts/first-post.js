import Link from 'next/link'

export default function FirstPost() {
    return (
    <>
      <h1> First-ish Post</h1>
      <h2> 
        <Link href="/">
          <a>Back to Home</a>
          {/* <a></a> isn't strictly necessary, but helps with styling, accessibility and SEO. So more like, it's not necessary for the page to work, but it's necessary for it to work as intended. */}
        </Link>
      </h2>
    </>
    )
  }