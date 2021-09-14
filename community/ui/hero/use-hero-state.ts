import { useState } from 'react';

export enum HeroState {
  HEADING_UPDATED = 'heading',
  CTA_UPDATED = 'cta'
}

export function useHeroState() {
  const [heroState, setHeroState] = useState<HeroState>();

  function setStateFromTime(time: number) {
    if (time > 8000) return setHeroState(HeroState.HEADING_UPDATED);
  }
  
  return {
    heroState,
    setStateFromTime
  };
}
