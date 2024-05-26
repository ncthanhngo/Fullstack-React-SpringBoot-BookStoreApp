import React from "react";
import BookModel from "../../../models/BookModel";
import BookProps from "./components/BookProps";
import { getAllBooks } from "../../../api/BookApi";

const Products: React.FC = () =>{
    const [products, setProducts] = React.useState<BookModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const[error, setError] = React.useState<string>("");

    React.useEffect(() => {
        getAllBooks().then((data) => {
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
        <div className="container">
            <div className="row mt-5">
                {
                    products.map((book) => (
                            <BookProps key={book.bookId}  book={book} />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Products;
