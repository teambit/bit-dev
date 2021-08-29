import { renderHook, act } from '@testing-library/react-hooks';
import { useStars } from './use-stars';

it('should increment counter', () => {
  const { result } = renderHook(() => useStars())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
