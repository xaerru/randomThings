interface UserNameInfo {
  first: string;
  last: string;
}

interface UserAddress {
  street: {
    number: number;
    name: string;
  }
  city: string;
  state: string;
  country: string;
}

export interface UserInfo {
  name: UserNameInfo;
  picture: {
    large: string;
  };
  location: UserAddress;
  email: string;
  dob: {
    age: number;
  }
  phone: string;
}