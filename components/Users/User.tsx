import { BrowserView, MobileView } from "react-device-detect";
import { UserData } from "./UserData";

export const User = ({ user }): JSX.Element => {
  return (
    <>
      <BrowserView>
        <div className="bg-green-200 p-6 shadow-xl flex m-3 space-x-4 rounded-lg">
          <div className="flex-shrink-0">
            <img src={user.picture.large} className="w-48 rounded-full" />
          </div>
          <UserData user={user} />
        </div>
      </BrowserView>
      <MobileView>
        <div className="flex flex-col p-2 m-3 bg-green-200 shadow-xl space-y-1">
          <img src={user.picture.large} className="self-center rounded-full" />
          <UserData user={user} />
        </div>
      </MobileView>
    </>
  );
};
