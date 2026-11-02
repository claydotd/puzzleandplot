import FormEmbed from '../../components/FormEmbed'

const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function PuzzleTrail() {
  return (
    <div className="service-page scatter-page">
      <img className="scatter scatter--left scatter--out scatter--y-2 scatter--rot-25 scatter--lg" src={asset('magnifyingglass.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-16 scatter--rot-20 scatter--md" src={asset('fingerprint1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-28 scatter--rot-15 scatter--sm" src={asset('pin1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--out scatter--y-40 scatter--rot-neg-10 scatter--md" src={asset('paperclip1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-52 scatter--rot-neg-20 scatter--md" src={asset('key2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-56 scatter--rot-30 scatter--sm" src={asset('paperclip3.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-76 scatter--rot-5 scatter--lg" src={asset('fingerprint2.png')} alt="" aria-hidden="true" />

      <header className="service-hero service-hero--wide">
        <h1>City Trail: Outdoor escape room</h1>
        <p className="service-price">price: <strong>£35</strong></p>
        <p className="service-stamp">Coming Summer 2027!</p>
      </header>

      <div className="service-lede">
        <aside className="service-aside">
          <p>Suitable for any age. Bring your sharpest spy instincts.</p>
        </aside>
        <p>So you think you have what it takes to join the Super Secret Scottish Spy Society?</p>
        <p>
          Put your spy skills to the test with this outdoor escape room that will take you to
          some of Edinburgh’s most famous landmarks! You will be given a briefcase with
          instructions, a map and a box locked with mysterious locks. Search your surroundings
          for clues and solve the puzzles to complete your application to join the Super Secret
          Scottish Spy Society!
        </p>
      </div>

      <section className="service-steps">
        <h2>How it works</h2>
        <ol>
          <li>
            <p>
              Fill out the enquiry form and book your time slot. The price is per group and is
              suitable for any age. You and your team will be given the address of the secret
              meeting point where you’ll meet Agent X who will hand over the briefcase. You will
              be informed of the latest time the briefcase must be returned.
            </p>
          </li>
          <li>
            <p>
              Use the map to find the exact location where the clues are hidden, which enables
              you to solve the puzzles. Allow about 1.5–2 hours for this.
            </p>
          </li>
          <li>
            <p>
              Once you have solved the puzzles, come back to the meeting point and return the
              briefcase and claim your prize!
            </p>
          </li>
        </ol>
      </section>

      <FormEmbed service="city-trail" />
    </div>
  )
}
