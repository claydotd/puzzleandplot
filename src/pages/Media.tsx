const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function Media() {
  return (
    <section className="scatter-page">
      <img className="scatter scatter--left scatter--y-12 scatter--rot-neg-10 scatter--xl" src={asset('magnifyingglass.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--right scatter--out scatter--y-36 scatter--rot-neg-20 scatter--lg" src={asset('key1.png')} alt="" aria-hidden="true" />

      <h1>Media</h1>
    </section>
  )
}