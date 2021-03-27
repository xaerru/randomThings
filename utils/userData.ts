import axios from "axios";
import { UserInfo } from "./userInterface"

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