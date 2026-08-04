import './Hero.css'

function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero-luxury">
      <div className="hero-content">
        <h1>Nailsbyyeshu</h1>
        <p>Luxury Nail Art & Premium Beauty Services</p>
        <section id="booking"></section>
     <button
  className="book-btn"
  onClick={() =>
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Book Appointment
</button>
      </div>
    </section>
  )
}

export default Hero