import { TMenu } from 'src/types/Menu';

export interface TMenuInitialState {
  menu: TMenu[] | [];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
