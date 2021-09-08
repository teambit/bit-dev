export enum ProductType {
  product = 'use-cases'
}

export type UseCasesFromApi = {
  title?: string;
  text?: string;
  image?: string;
  alt?: string;
  href?: string;
};

export class UseCases {
  constructor(
    /**
     * an image to be rendered in the card.
     */
    public image?: string,
    /**
     * alt tag for the image
     */
    public alt?: string,
    /**
     * a title for the card
     */
    public title?: string,
    /**
     * a text for the card
     */
    public text?: string,
    /**
     * a href for internal link for the card
     */
    public href?: string
  ) {}

  static fromApiObject(object: UseCasesFromApi) {
    return new UseCases(
      object.image,
      object.alt,
      object.title,
      object.text,
      object.href
    );
  }
}
