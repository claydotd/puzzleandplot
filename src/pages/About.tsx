import FormEmbed from '../components/FormEmbed'

const object = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`
const about = (file: string) => `${import.meta.env.BASE_URL}about/${file}`

export default function About() {
  return (
    <section className="about-page scatter-page">
      <img className="scatter scatter--left scatter--y-16 scatter--rot-neg-20 scatter--xl" src={object('fingerprint2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--out scatter--y-56 scatter--rot-neg-15 scatter--xl" src={object('key2.png')} alt="" aria-hidden="true" />

      <header className="about-hero">
        <p className="about-case-label">Case file 001</p>
        <h1>Who am I, this mysterious game master?</h1>
      </header>

      <div className="about-desk">
        <div className="about-row">
          <figure className="desk-print desk-print--a">
            <img src={about('image8.jpeg')} alt="Kajsa in detective disguise with a magnifying glass" />
            <img className="desk-print__object desk-print__object--tl" src={object('pin3.png')} alt="" aria-hidden="true" />
            <figcaption>Exhibit A: subject, undercover</figcaption>
          </figure>
          <div className="about-scrap about-scrap--intro">
            <p>
              Well, you can call me Kajsa (mainly because that is my name) and I’m the brain behind
              every Puzzle &amp; Plot game you see here. (Unless you are from the Warner Bros.
              Entertainment legal department, then I have no idea who wrote these games).
            </p>
          </div>
        </div>

        <div className="about-row about-row--flip">
          <figure className="desk-print desk-print--b">
            <img src={about('image7.jpeg')} alt="Kajsa as a noir detective, peering through a magnifying glass" />
            <img className="desk-print__object desk-print__object--tr" src={object('paperclip2.png')} alt="" aria-hidden="true" />
            <figcaption>Exhibit B: close inspection</figcaption>
          </figure>
          <div className="about-scrap about-scrap--escape">
            <p className="about-scrap__hand">Humble beginnings, allegedly…</p>
            <p>
              I did my first escape room in 2016, solved exactly 1 (one) puzzle and didn’t do another
              escape room until 7 years later when I visited the incredible Sherlocked game “The
              Landlady” in Malmö, Sweden. By 2026, I’ve racked up a total of…8 escape rooms, but one
              of them was the even more incredible Sherlocked game “The Alchemist” in Amsterdam and
              that counts as at least 2!
            </p>
          </div>
        </div>

        <div className="about-row">
          <figure className="desk-print desk-print--c">
            <img src={about('image4.jpeg')} alt="Kajsa dressed as a sheet ghost with sunglasses" />
            <img className="desk-print__object desk-print__object--br" src={object('key3.png')} alt="" aria-hidden="true" />
            <figcaption>Exhibit C: spooky encounter</figcaption>
          </figure>
          <div className="about-scrap about-scrap--plot">
            <p>
              I have always enjoyed making puzzle hunts for my family and friends (which they always
              enjoyed and no one was forced to do) which was a huge success but around 2023 I wanted
              a new challenge and started to write games with focus on unique narratives and an
              actual plot, and these are the games I’m offering in the online virtual escape room
              section.
            </p>
          </div>
        </div>

        <div className="about-row about-row--flip">
          <figure className="desk-print desk-print--d">
            <img src={about('image3.jpeg')} alt="Kajsa, game master of Puzzle &amp; Plot" />
            <img className="desk-print__object desk-print__object--tl" src={object('paperclip4.png')} alt="" aria-hidden="true" />
            <figcaption>Exhibit D: my future red string board</figcaption>
          </figure>
          <div className="about-scrap about-scrap--loves">
            <p>
              I love folklore, cryptids, the supernatural, bad puns and not infringing on intellectual
              property, which you’ll see reflected in the game stories. I also love a good old
              fashioned detective story and a red string board. Ahh…man, I really want a red string
              board…maybe one day when I can afford a real office.
            </p>
            <p className="about-scrap__stamp">CLASSIFIED</p>
          </div>
        </div>

        <div className="about-scrap about-scrap--close">
          <p>
            So basically Puzzle &amp; Plot is run by a very small team (hi, it’s me, I’m the small
            team), I write the mysteries, construct the puzzles, host the games and illustrate all
            the clues. I’m passionate about bringing you affordable fun and entertaining mysteries
            and adventures that hopefully you will love.
          </p>
        </div>
      </div>

      <FormEmbed />
    </section>
  )
}
