import React from "react";
import ImageModel from "../models/ImageModel";
import { myRequest } from "./MyRequest";
  export async function getAllImageOfOneBook(bookId:number): Promise<ImageModel[]> {
    const result: ImageModel[] = [];
    //Endpoint
    const endpoint: string = `http://localhost:8088/books/${bookId}/images` //luu y can dau backstick
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