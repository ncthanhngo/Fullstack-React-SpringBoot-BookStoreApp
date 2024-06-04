import React from "react";
import BookModel from "../models/BookModel";
import { myRequest } from "./MyRequest";

async function getBook(endpoint: string): Promise<BookModel[]> {
  const result: BookModel[] = [];
  //Endpoint
  //call request
  const response = await myRequest(endpoint);
  // Do response trả về nhiều giá trị nên cần check console trên trình duyệt để lấy ra giá trị mong muốn
  const responseData = response._embedded.books;
  for (const book of responseData) {
    result.push(
      new BookModel(
        book.bookId,
        book.bookName,
        book.author,
        book.isbn,
        book.description,
        book.price,
        book.discountPrice,
        book.quantity,
        book.rating
      )
    );
  }
  console.log(result);
  return result;
}

export async function getAllBooks(): Promise<BookModel[]> {
  const endpoint: string = "http://localhost:8088/books?sort=bookId,desc";
  return await getBook(endpoint);
}
export async function getThreeRatingBooks(): Promise<BookModel[]> {
  const endpoint: string = "http://localhost:8088/books?sort=rating,desc";
  return await getBook(endpoint);
}
export async function searchBook(keyword: string): Promise<BookModel[]> {
  const endpoint: string = `http://localhost:8088/books/search/findByBookNameContaining?bookName=${keyword}&size=8&page=0&sort=bookId,desc`;
  
  return await getBook(endpoint);
}
