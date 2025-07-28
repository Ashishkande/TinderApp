export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    country: string;
  };
  dob: {
    age: number;
  };
  phone: string;
  cell: string;
  nat: string;
  gender: string;
  login: {
    uuid: string;
  };
}
