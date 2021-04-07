import { Item } from '@hn/api-interfaces';
import { of } from 'rxjs';

export const mockWidgetsService = {
  items: () => of([]),
  getItem: () => of({ ...mockItem }),
};

export const mockItem = {
  id: 111,
  title: "mock", 
  by: "mock",
  time: 1617801950,
  type: "story",
  poll: 30,
  kids: 20,
};

export const mockEmptyItem = {
  id: null,
  title: 'mockEmpty',
  description: 'mockEmpty',
};