export type ComponentCardsProps = {
  id: string;
  version: string;
  description: string;
  envIcon: string;
  preview: any;
};

export class ComponentCards {
  constructor(
    /**
     * ID of the component
     */
    readonly id: string,

    /**
     * version of the component
     */
    readonly version: string,

    /**
     * description of the component
     */
    readonly description: string,

    /**
     * framework of component
     */
    readonly envIcon: string,
    /**
     * Component to be rendered in the preview
     */
    readonly preview: any
  ) {}

  static fromObject(plainComponentCards: ComponentCardsProps) {
    return new ComponentCards(
      plainComponentCards.id,
      plainComponentCards.version,
      plainComponentCards.description,
      plainComponentCards.envIcon,
      plainComponentCards.preview
    );
  }
}
