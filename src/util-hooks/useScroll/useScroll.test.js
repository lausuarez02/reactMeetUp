import { renderHook } from '@testing-library/react-hooks';
import useScrollListener from './useScroll';

describe('useScrollListener', () => {
  test('should return an object with x, y, lastX, and lastY properties', () => {
    const { result } = renderHook(() => useScrollListener());
    expect(result.current).toHaveProperty('x');
    expect(result.current).toHaveProperty('y');
    expect(result.current).toHaveProperty('lastX');
    expect(result.current).toHaveProperty('lastY');
  });
});