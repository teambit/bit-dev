import { BubbleProps, Bubble } from './bubble';

export class HeroGraph { 
  constructor(
    readonly bubbles: Bubble[]
  ) {}

  static fromPlainBubbles(plainBubbles: BubbleProps[]) {
    const bubbles = plainBubbles.map((plainBubble => Bubble.fromObject(plainBubble)));
    return new HeroGraph(bubbles);
  }

  toPlainObject() {
    return {
      bubbles: this.bubbles.map(bubble => bubble.toObject())
    };
  }
}
