import Link from "next/link";

const FooterNav = () => {
    return (
        <>
            <footer className="footer">
                <Link href='/about'>
                    <a className="aboutTNB">About us</a>
                </Link>
            </footer>
        </>
    )
}

export default FooterNav;