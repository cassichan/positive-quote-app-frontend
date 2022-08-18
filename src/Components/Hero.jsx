import "../Styles/Hero.css";

export default function Hero() {
  return (
    <main id="hero-main">
      <h1>Quotes...</h1><br/>
      <p>
        Most of us have a favorite or two.
        <br />
        <br /> Some poetic line that lingers with us, that tugs on our
        heartstrings, and that we can call upon to lift us up when we need
        strength.
        <br /> <br />
        <br />
        The purpose of this website is to provide a space where people can share
        and read some quotes to lift the human spirit, in good times and bad
        times.
      </p>
      <br />
      <br />
      <br />
      <div id="img-container">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/15/17/14/love-1672154_1280.jpg"
          alt="Two hands cupped together to form the shape of a heart, with a background of blue sky and white clouds."
        ></img>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/18/20/57/quotes-729173_1280.jpg"
          alt="Wooden blocks with letters and a few next to eachother showing phrase 'carpe diem"
        ></img>
      </div>
      <br />
      <br />
      <br />
    </main>
  );
}
