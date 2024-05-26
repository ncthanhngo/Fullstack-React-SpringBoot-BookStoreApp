class BookModel{
    bookId:number;
    bookName?:string;//có thể bị null
    author?:string;
    isbn?:string;
    description?:string;
    price?:number;
    discountPrice?:number;
    quantity?:number;
    rating?:number;

    constructor(bookId:number,bookName:string,author:string,
        isbn:string,description:string,price:number,discountPrice:
        number,quantity:number,rating:number){
            this.bookId=bookId;
            this.bookName=bookName;
            this.author=author;
            this.isbn=isbn;
            this.description=description;
            this.price=price;
            this.discountPrice=discountPrice;
            this.quantity=quantity;
            this.rating=rating;
        

}
}
export default BookModel;