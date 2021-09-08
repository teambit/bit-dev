export enum ProductType {
  product = 'benefits'
}

export type BenefitsFromApi = {
  title?: string;
  text?: string;
  image?: string;
  alt?: string;
};

export class Benefits {
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
    public text?: string
    /**
     * a href for internal link for the card
     */
  ) {}

  static fromApiObject(object: BenefitsFromApi) {
    return new Benefits(object.image, object.alt, object.title, object.text);
  }
}
