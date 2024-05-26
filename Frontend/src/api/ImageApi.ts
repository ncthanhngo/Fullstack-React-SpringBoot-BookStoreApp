import React from "react";
import ImageModel from "../models/ImageModel";
import { myRequest } from "./MyRequest";

async function getImageBook(endpoint: string): Promise<ImageModel[]> {
    const result: ImageModel[] = [];
    //Endpoint
    
    //call request
    const response = await myRequest(endpoint);
    // Do response trả về nhiều giá trị nên cần check console trên trình duyệt để lấy ra giá trị mong muốn
    const responseData = response._embedded.images;
    for (const image of responseData) {
      result.push(
        new ImageModel(
          image.imageId,
          image.imageName,
          image.icon,
          image.url,
          image.imageData
        )
      );
    }
    console.log(result);
    return result;

}
  export async function getAllImageOfOneBook(bookId:number): Promise<ImageModel[]> {
    const endpoint: string = `http://localhost:8088/books/${bookId}/images` //luu y can dau backstick
    return await getImageBook(endpoint);
    
}
//Lay anh dau tien cua 1 sach rating cao nhat

export async function getFirstImageOfOneBook(bookId:number): Promise<ImageModel[]> {
    const endpoint: string = `http://localhost:8088/books/${bookId}/images?sort=rating,asc&page=0&size=1` //luu y can dau backstick
    return await getImageBook(endpoint);
    
}