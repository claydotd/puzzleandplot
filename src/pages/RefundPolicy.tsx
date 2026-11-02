const asset = (file: string) => `${import.meta.env.BASE_URL}objects/${file}`

export default function RefundPolicy() {
  return (
    <section className="policy-page scatter-page">
      <img className="scatter scatter--right scatter--out scatter--y-8 scatter--rot-15 scatter--md" src={asset('key1.png')} alt="" aria-hidden="true" />
      <img className="scatter scatter--left scatter--y-24 scatter--rot-neg-20 scatter--sm" src={asset('fingerprint1.png')} alt="" aria-hidden="true" />

      <h1>Refund policy</h1>
      <p>
        If you need to cancel or rearrange a booking, get in touch as soon as you can so another
        group can take the slot.
      </p>
      <p>
        Wedding bookings require a £50 deposit to secure the date. Deposit terms and any remaining
        balance deadlines will be confirmed when your enquiry is accepted.
      </p>
      <p>
        This page is a working draft — final refund and cancellation wording can be updated before
        launch.
      </p>
    </section>
  )
}
