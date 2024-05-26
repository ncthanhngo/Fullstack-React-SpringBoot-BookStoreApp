import React from "react";
import BookModel from "../../../../models/BookModel";
import ImageModel from "../../../../models/ImageModel";
import { getAllImageOfOneBook } from "../../../../api/ImageApi";
interface BookProps {
    book: BookModel;
}

const BookProps: React.FC<BookProps> = ( props ) => {
    const bookId = props.book.bookId;
    
        const [images, setImages] = React.useState<ImageModel[]>([]);
        const [loading, setLoading] = React.useState<boolean>(true);
        const[error, setError] = React.useState<string>("");
    
        React.useEffect(() => {
            getAllImageOfOneBook(bookId).then((data) => {
                setImages(data);
                setLoading(false);
            }).catch((error) => {
                setError(error.message);
                setLoading(false);
            });
        });
       
            if((loading && images.length === 0) || error){
                return (<div className="container">
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        </div>
                    </div>
                </div>);
            }
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <img
                    src={""}
                    className="card-img-top"
                    alt={props.book.bookName}
                    style={{ height: '200px' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.book.bookName}</h5>
                    <p className="card-text">{props.book.description}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.book.price}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.book.discountPrice}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BookProps;