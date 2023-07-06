import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h1 className='flexCenter'>Home</h1>
            <h2>Home</h2>
            <Link href="/blogs"><h2>Blog</h2></Link>
            <Link href="/projects"><h2>Projects</h2></Link>
            <Link href="/services"><h2>Services</h2></Link>
        </div>
    )
}

export default Home