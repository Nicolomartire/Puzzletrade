import FooterNav from "../components/footerNav"

function HomePage() {
  return (
    <div className="wrapper">
      <header className="header">Puzzle Header</header>

      <ul className="flex-container">
        <li className="flex-item">1</li>
        <li className="flex-item">2</li>
        <li className="flex-item">3</li>
        <li className="flex-item">4</li>
        <li className="flex-item">5</li>
        <li className="flex-item">6</li>
      </ul>
      <footer className="footer">Footer
        <FooterNav />
      </footer>
    </div >
  )
}
export default HomePage
