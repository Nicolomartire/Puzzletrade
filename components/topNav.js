import Link from "next/link";

const Nav = () => {
    return (
        <>
            <nav className="TopNavBar">
                <Link href='/' className="homeTNB, navelements">
                    <a>Home</a>
                </Link>
                <Link href='/trade' className="tradeTNB, navelements">
                    <a>Trade</a>
                </Link>
                <Link href='/user' className="userTNB, navelements">
                    <a>User</a>
                </Link>
            </nav>
        </>
    )
}

export default Nav;