import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  test('should fetch data', async () => {
    const data = { foo: 'bar' };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({ url: '/data.json' })
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual(data);
  });
});