import FormEmbed from '../components/FormEmbed'

const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function Contact() {
  return (
    <section className="contact-page scatter-page">
      <img className="scatter scatter--left scatter--out scatter--y-8 scatter--rot-neg-15 scatter--lg" src={asset('paperclip3.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--out scatter--y-36 scatter--rot-neg-25 scatter--xl" src={asset('key3.png')} alt="" aria-hidden="true" />

      <header className="contact-page__intro">
        <h1>Contact</h1>
        <p>
          Ready to book a game, plan a wedding puzzle, or ask a question? Fill in the enquiry form
          below and I’ll get back to you.
        </p>
      </header>

      <FormEmbed />
    </section>
  )
}
