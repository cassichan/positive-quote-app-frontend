import "../Styles/Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-img-container">
      <img className="gallery-img"
        src="https://cdn.pixabay.com/photo/2015/04/18/20/57/quotes-729173_1280.jpg"
        alt="Wooden blocks with letters and a few next to eachother showing phrase 'carpe diem"
      ></img>
      <img className="gallery-img"
        src="https://cdn.pixabay.com/photo/2017/08/01/22/31/wall-2568346_1280.jpg"
        alt="A graffitied red brick wall that says 'Everything has beauty but not everyone can see it'"
      ></img>
    </div>
  );
}
