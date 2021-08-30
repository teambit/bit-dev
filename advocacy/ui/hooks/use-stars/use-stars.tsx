import { useState } from 'react';

export function useStars() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  // currently having some cors issues but we can use either one of these urls to get our stars
  // fetch('http://api.github.com/repos/teambit/bit').then((res) => console.log("resss", res))
  // fetch('https://api.bit.dev/social/stars').then((res) => console.log("resss", res))
  return { count, increment }
}
