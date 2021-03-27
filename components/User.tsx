import { BrowserView, MobileView } from "react-device-detect";
import { getUsername, getAddress } from "../utils/userData";
import { UserInfo } from "../utils/userInterface";
import UserData from "./UserData";

interface UserProps {
  user: UserInfo;
}

export default function User(props: UserProps): JSX.Element {
  return (
    <>
      <BrowserView>
        <div className="bg-green-200 p-6 shadow-xl flex m-3 space-x-4 rounded-lg">
          <div className="flex-shrink-0">
            <img src={props.user.picture.large} className="rounded-full w-48" />
          </div>
          <div>
            <div className="text-3xl font-mono font-semibold">
              {getUsername(props.user)}
            </div>
            <UserData title="Email:" content={props.user.email} />
            <UserData title="Phone:" content={props.user.phone} />
            <UserData title="Age:" content={props.user.dob.age} />
            <UserData title="Address" content={getAddress(props.user)} />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="bg-green-200 p-2 shadow-xl flex flex-col m-3 space-y-1">
          <img
            src={props.user.picture.large}
            className="rounded-full self-center"
          />
          <div className="text-3xl font-mono font-semibold self-center">
            {getUsername(props.user)}
          </div>
          <UserData title="Email:" content={props.user.email} />
          <UserData title="Phone:" content={props.user.phone} />
          <UserData title="Age:" content={props.user.dob.age} />
          <UserData title="Address" content={getAddress(props.user)} />
        </div>
      </MobileView>
    </>
  );
}
