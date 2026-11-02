import { Link } from "react-router-dom"
import FormEmbed from '../components/FormEmbed'

const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function Home() {
  return (
    <div className="home-container scatter-page">
      <img className="scatter scatter--left scatter--out scatter--y-4 scatter--rot-neg-15 scatter--md" src={asset('paperclip1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-8 scatter--rot-20 scatter--lg" src={asset('magnifyingglass.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-12 scatter--rot-10 scatter--sm" src={asset('pin2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-2 scatter--rot-neg-45 scatter--md" src={asset('key1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--in scatter--y-16 scatter--rot-neg-5 scatter--md" src={asset('fingerprint1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-20 scatter--rot-15 scatter--sm" src={asset('paperclip4.png')} alt="" aria-hidden="true" />

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
        <p>Get in touch for more info or to book a game</p>
      </div>

      <FormEmbed />
    </div>
  )
}
