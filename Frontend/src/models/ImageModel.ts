class ImageModel {
  imageId: number;
  imageName?: string;
  icon?: boolean;
  url?: string;
  imageData?: string;

  constructor(
    imageId: number,
    imageName: string,
    icon: boolean,
    url: string,
    imageData: string
  ) {
    this.imageId = imageId;
    this.imageName = imageName;
    this.icon = icon;
    this.url = url;
    this.imageData = imageData;
  }
}
export default ImageModel;
