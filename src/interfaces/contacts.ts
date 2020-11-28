export type Data = {
  text: string;
  type?: string;
};

export interface DetailItem {
  id: string;
  title: string;
  textItems: Data[];
}

export type Address = {
  city?: string;
  country?: string;
  state?: string;
  street?: string;
  zipCode?: string;
};

export type Phone = {
  work?: string;
  home?: string;
  mobile?: string;
};

export interface Contact {
  address: Address;
  birthdate?: string;
  companyName?: string;
  emailAddress?: string;
  id: string;
  isFavorite: boolean;
  largeImageURL?: string; // replace with image type
  name: string;
  phone: Phone;
  smallImageUrl?: string; // replace with image type
}
