import "../Styles/About.css";

export default function About() {
  return (
    <>
      <div className="about-img-container">
        <p className="about-main">
          This page was inspired by my personal experience of finding strength,
          comfort, inspiration and motivation through literature and quotes.
        </p>
        <br />
        <p className="about-main">
          I hope that my creating this space I can share that with others.
        </p><br/><br/>

        <img
          className="about-img"
          src="https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg"
          alt="A view of the sun setting over hills in the distance with a tree to the right."
        ></img>
      </div>
    </>
  );
}
