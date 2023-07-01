import './OptionLogement.scss';

function OptionLogement() {
  return (
    <section className="OptionLogement">
      <label htmlFor="logement" className="OptionLogement-switch">
        <input type="checkbox" name="logement" id="logement" />
        <span className="OptionLogement-switch-slider"></span>
      </label>
      <p>Trouvez un logement avec <a href="https://booking.com" target='_blank'>Booking.com</a></p>
    </section>
  )
}

export default OptionLogement;
