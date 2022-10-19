import Link from "next/link";

const Nav = () => {
    return (
        <>
            <header className="header">
                <nav className="TopNavBar">
                    <Link href='/'>
                        <a className="homeTNB">Home</a>
                    </Link>
                    <Link href='/trade'>
                        <a className="tradeTNB">Trade</a>
                    </Link>
                    <Link href='/user'>
                        <a className="userTNB">User</a>
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Nav;