const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function Disclaimer() {
  return (
    <section className="policy-page scatter-page">
      <img className="scatter scatter--left scatter--out scatter--y-4 scatter--rot-neg-15 scatter--md" src={asset('paperclip2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-20 scatter--rot-20 scatter--sm" src={asset('pin3.png')} alt="" aria-hidden="true" />

      <h1>Disclaimer</h1>
      <p>
        Puzzle &amp; Plot experiences are designed for entertainment. By booking, you confirm that
        participants will take part in good faith, follow any safety guidance given for outdoor or
        in-person games, and that you have authority to book on behalf of your group.
      </p>
      <p>
        Online games require a stable internet connection and a device suitable for video calling.
      </p>
      <p>
        This page is a working draft, final wording can be updated before launch.
      </p>
    </section>
  )
}
