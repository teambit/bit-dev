export enum ProductType {
  product = 'links'
}

export type LinksFromApi = {
  href?: string;
  text?: string;
};

export class Links {
  constructor(
    /**
     * href to tell link where it should go
     */
    public href?: string,
    /**
     * text for the link
     */
    public text?: string
  ) {}

  static fromApiObject(object: LinksFromApi) {
    return new Links(object.href, object.text);
  }
}
