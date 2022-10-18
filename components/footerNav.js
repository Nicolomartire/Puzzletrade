import Link from "next/link";

const FooterNav = () => {
    return (

        <footer>
            <Link href='/about' className="aboutTNB, navelements">
                <a>About</a>
            </Link>
        </footer>
    )
}

export default FooterNav;