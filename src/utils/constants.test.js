import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from './constants';

describe('constants', () => {
  test('ALL_MEETUP_PAGE should be 1', () => {
    expect(ALL_MEETUP_PAGE).toBe(1);
  });

  test('FAVORITES_PAGE should be 2', () => {
    expect(FAVORITES_PAGE).toBe(2);
  });

  test('NEW_MEETUP_PAGE should be 3', () => {
    expect(NEW_MEETUP_PAGE).toBe(3);
  });
});
