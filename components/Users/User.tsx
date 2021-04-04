import { BrowserView, MobileView } from "react-device-detect";
import { UserData } from "./UserData";

export const User = ({ user }): JSX.Element => {
  return (
    <>
      <BrowserView>
        <div className="bg-green-200 p-6 shadow-xl flex m-3 space-x-4 rounded-lg">
          <div className="flex-shrink-0">
            <img src={user.picture.large} className="rounded-full w-48" />
          </div>
          <UserData user={user} />
        </div>
      </BrowserView>
      <MobileView>
        <div className="bg-green-200 p-2 shadow-xl flex flex-col m-3 space-y-1">
          <img src={user.picture.large} className="rounded-full self-center" />
          <UserData user={user} />
        </div>
      </MobileView>
    </>
  );
};
