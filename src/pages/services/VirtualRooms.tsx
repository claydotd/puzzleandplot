import { Link } from 'react-router-dom'
import FormEmbed from '../../components/FormEmbed'
import { onlineGames } from '../../data/onlineGames'

const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function VirtualRooms() {
  return (
    <div className="service-page scatter-page">
      <img className="scatter scatter--right scatter--y-8 scatter--rot-15 scatter--xl" src={asset('magnifyingglass.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--out scatter--y-40 scatter--rot-neg-20 scatter--lg" src={asset('fingerprint1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--out scatter--y-76 scatter--rot-5 scatter--xl" src={asset('key1.png')} alt="" aria-hidden="true" />

      <header className="service-hero">
        <h1>Online Virtual Escape Rooms</h1>
        <p className="service-price">total cost: <strong>£49</strong></p>
      </header>

      <div className="service-lede">
        <aside className="service-aside">
          <p>Bring a pen and paper. That’s it.<br/><Link to="/faq" className="aside-link">(See FAQ for the rest.)</Link></p>
        </aside>
        <p>
          This is a type of game wherein I <em><Link to="/about" className="aside-link">(your formidable game master)</Link></em> will host a
          fun escape room experience through a video call. You and your friends or family will
          join from your home by means of a laptop/computer/tablet. I will describe the scene
          to you and when you explore it and uncover clues. I will send you pictures of puzzles
          for you to solve.
        </p>
        <p>
          There are no timers and success is guaranteed because I’m always there to nudge you
          in the right direction if you need it.
        </p>
      </div>

      <section className="service-steps">
        <h2>How it works</h2>
        <ol>
          <li>
            <p>
              Start with filling out the enquiry form and specify which game you would like to
              play. The price is per group and not per player.
            </p>
          </li>
          <li>
            <p>I will send you instructions on how to join the call nearer the time.</p>
          </li>
          <li>
            <p>
              On the day of the game I will check everything is still ok to go ahead and at the
              agreed time I will call you and we will begin our adventure!
            </p>
          </li>
        </ol>
      </section>

      <section className="game-list">
        <h2>Games to choose from</h2>
        <ul>
          {onlineGames.map((game) => (
            <li key={game.name}>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <FormEmbed service="online" />
    </div>
  )
}
