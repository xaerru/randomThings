import UserDataItem from "./UserDataItem";
import { getUsername, getAddress } from "../utils/userData";

export default function UserData({ user }): JSX.Element {
  return (
    <div>
      <div className="text-3xl font-mono font-semibold">
        {getUsername(user)}
      </div>
      <UserDataItem title="Email:" content={user.email} />
      <UserDataItem title="Phone:" content={user.phone} />
      <UserDataItem title="Age:" content={user.dob.age} />
      <UserDataItem title="Address" content={getAddress(user)} />
    </div>
  );
}
