export enum ProductType {
  product = 'use-cases'
}

export type UseCasesFromApi = {
  title?: string;
  text?: string;
  icon?: string;
};

export class UseCases {
  constructor(
    /**
     * an icon to be rendered in the card.
     */
    public icon?: string,
    /**
     * a title for the card
     */
    public title?: string,
    /**
     * a text for the card
     */
    public text?: string
  ) {}

  static fromApiObject(object: UseCasesFromApi) {
    return new UseCases(object.icon, object.title, object.text);
  }
}
