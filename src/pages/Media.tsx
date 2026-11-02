const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function Media() {
  return (
    <section className="scatter-page">
      <img className="scatter scatter--right scatter--out scatter--y-4 scatter--rot-25 scatter--md" src={asset('paperclip2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-16 scatter--rot-neg-10 scatter--lg" src={asset('magnifyingglass.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--y-28 scatter--rot-15 scatter--sm" src={asset('pin2.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--out scatter--y-40 scatter--rot-neg-20 scatter--md" src={asset('key1.png')} alt="" aria-hidden="true" />

      <h1>Media</h1>
    </section>
  )
}