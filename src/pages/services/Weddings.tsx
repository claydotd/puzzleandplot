import FormEmbed from '../../components/FormEmbed'

const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function Weddings() {
  return (
    <div className="service-page scatter-page">
      <img className="scatter scatter--right scatter--out scatter--y-4 scatter--rot-25 scatter--md" src={asset('pin1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-12 scatter--rot-neg-15 scatter--md" src={asset('paperclip2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-28 scatter--rot-neg-45 scatter--xl" src={asset('key3.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--out scatter--y-40 scatter--rot-neg-30 scatter--md" src={asset('fingerprint2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--out scatter--y-52 scatter--rot-neg-5 scatter--sm" src={asset('paperclip4.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-64 scatter--rot-20 scatter--md" src={asset('pin3.png')} alt="" aria-hidden="true" />

      <header className="service-hero">
        <h1>Bespoke Wedding Game</h1>
        <p className="service-price">price: <strong>£299</strong></p>
      </header>

      <div className="service-lede">
        <p>
          Are you looking for something different to entertain your guests at your wedding? Do
          you like the idea of a personalised puzzle game to challenge your friends and family
          in a fun way? <em>Then I've got the perfect game for you!</em>
        </p>
        <p>
          The game consists of five individual puzzles that each will help you unlock a
          mysterious box. The game is designed to take around 25–35 minutes to complete and is
          ideal for 2–5 players. I will host the game and support with helpful hints if needed.
        </p>
      </div>

      <section className="service-steps">
        <h2>How it works</h2>
        <ol>
          <li>
            <p>
              Fill out the enquiry form and I will get back to you about some things I will need
              to make it personal to just you (this will include names and photos).
            </p>
          </li>
          <li>
            <p>
              On the day all I will need is to be able to sit around a table that seats the group
              size, I will bring everything else with me.
            </p>
          </li>
          <li>
            <p>
              Groups will take turns playing the game, putting their puzzle solving skills to the
              test!
            </p>
          </li>
        </ol>
      </section>

      <aside className="service-note">
        <p>
          <strong>Note:</strong> I am based in Edinburgh, so included in the wedding package is
          the condition that I'm willing to travel up to 45 min outside of Edinburgh. Any further
          and there will be an added extra travel cost.
        </p>
      </aside>

      <FormEmbed service="wedding" />
    </div>
  )
}
