import { renderHook } from '@testing-library/react-hooks';
import useAxios from '../useAxios';
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  mockAxios.reset();
});

describe('useAxios', () => {
  it('should initially set loading to true and data and error to null', () => {
    const { result } = renderHook(() => useAxios('/movies/trending'));

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeFalsy();
  });



  it('should set error on axios request failure', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAxios('/movies/trending'));

    await waitForNextUpdate();

    expect(result.current.error).toBeTruthy();
    expect(result.current.loading).toBeFalsy();
  });

});
