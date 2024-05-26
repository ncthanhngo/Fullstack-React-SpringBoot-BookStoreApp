import React from "react";
import BookModel from "../../../../models/BookModel";
import { getThreeRatingBooks } from "../../../../api/BookApi";
import CarouselItem from "./carourselItem";
const  Carousel: React.FC = () => {
    const [products, setProducts] = React.useState<BookModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const[error, setError] = React.useState<string>("");

    React.useEffect(() => {
        getThreeRatingBooks().then((data) => {
            setProducts(data);
            setLoading(false);
        }).catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    });
   
        if((loading && products.length === 0) || error){
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
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <CarouselItem key={0} book={products[0]}/>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                    <CarouselItem key={1} book={products[1]}/>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                    <CarouselItem key={2} book={products[2]}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;