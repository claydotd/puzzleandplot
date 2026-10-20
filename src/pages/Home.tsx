import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="centered">Welcome to Puzzle &amp; Plot</h1>
      <div className="home-intro centered">
        <p>Do you like the escape room experience but hate leaving your home and putting on people clothes? </p>
        <p>Then do I have a game for you!</p>
      </div>
      <div className="home-cta centered">
        <Link to="/virtual-rooms" className="button">
          Online Escape Rooms
        </Link>
        <Link to="/weddings" className="button">
          Bespoke Wedding Experiences
        </Link>
        <Link to="/puzzle-trail" className="button">
          City Puzzle Trail
        </Link>
      </div>
      <br/>
      <div className="watermark-stamp">
        <span>TOP SECRET</span>
      </div>
      <div className="home-content centered">
        <p>More details here...</p>
      </div>
    </div>
  )
}
