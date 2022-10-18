import "../styles.css"
import Nav from "../components/topNav"
import FooterNav from "../components/footerNav"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
