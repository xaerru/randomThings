import axios from "axios";

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

export const getUsername = (user: UserInfo): string => {
  const {
    name: { first, last},
  } = user;
  return `${first} ${last}`;
};

export const getAddress = (user: UserInfo): string => {
  const {location: {street: {number, name}, city, state, country}} = user;
  return `${number} ${name} Street, ${city}, ${state}, ${country}`;
};

export const fetchData = async () => {
  try {
    const { data } = await axios
      .get("https://randomuser.me/api");
    return data;
  } catch (err) {
    console.log(err);
  }
};