import React from "react";
import BookModel from "../../../../models/BookModel";
import ImageModel from "../../../../models/ImageModel";
import { getFirstImageOfOneBook } from "../../../../api/ImageApi";
interface CarouselItem {
  book: BookModel;
}

const CarouselItem: React.FC<CarouselItem> = (props) => {
  const bookId = props.book.bookId;

  const [images, setImages] = React.useState<ImageModel[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    getFirstImageOfOneBook(bookId)
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  });

  if ((loading && images.length === 0) || error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  let imageData: string = "";
  //Book co the khong co anh
  if (images[0] && images[0].imageData) {
    imageData = images[0].imageData;
  }
  return (
    <div className="row align-items-center me-5">
      <div className="col-5 text-center ">
        <img
          src={imageData}
          className="float-end"
          style={{ width: "150px" }}
        />
      </div>
      <div className="col-7">
        <h5>{props.book.bookName}</h5>
        <p>{props.book.description}</p>
      </div>
    </div>
  );
};
export default CarouselItem;
