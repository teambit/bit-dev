import { useState } from 'react';

export function useStars() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  // fetch('http://api.github.com/repos/teambit/bit').then((res) => console.log("resss", res))
  return { count, increment }
}
