export enum ProductType {
  product = 'product',
}

export type ImagesFromApi = {
  alt: string;
  src: string;
  loading?: 'lazy' | 'eager';
};

export class Images {
  constructor(
    /**
     * alt of image
     */
    public alt: string,
    /**
     * scr of image
     */
    public src: string,
    /**
     * scr of image
     */
    public loading?: 'lazy' | 'eager'
  ) {}

  static fromApiObject(object: ImagesFromApi) {
    return new Images(object.alt, object.src, object.loading);
  }
}
