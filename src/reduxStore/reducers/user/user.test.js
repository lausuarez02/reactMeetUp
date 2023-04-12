import { addToFavorites, removeFromFavorites ,userFavorites} from "./user";

describe('userFavorites reducer', () => {
    test('should return the initial state', () => {
      expect(userFavorites(undefined, {})).toEqual({ data: [] });
    });
  
    test('should handle addToFavorites', () => {
      const initialState = { data: [] };
      const action = { type: addToFavorites.type, payload: 'newItem' };
      const state = userFavorites(initialState, action);
      expect(state).toEqual({ data: ['newItem'] });
    });
  
    test('should handle removeFromFavorites', () => {
      const initialState = { data: ['item1', 'item2', 'item3'] };
      const action = { type: removeFromFavorites.type, payload: { id: 1 } };
      const state = userFavorites(initialState, action);
      expect(state).toEqual({ data: ['item1', 'item3'] });
    });
  });