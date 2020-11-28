import {Contact} from '@interfaces/contacts';

interface StateContact {
  loading: boolean;
  error: string | null;
  contacts: Contact[];
}

export interface StoreState {
  contacts: StateContact;
}
