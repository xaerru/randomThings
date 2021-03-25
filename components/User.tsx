import { UserInfo, getUsername, getAddress } from "../utils/userData";

interface UserProps {
  user: UserInfo;
}

export default function User(props: UserProps): JSX.Element {
  return (
    <>
      <div className="bg-green-200 p-6 shadow-xl flex m-3 space-x-4 rounded-lg">
        <div className="flex-shrink-0">
          <img src={props.user.picture.large} className="rounded-full w-48" />
        </div>
        <div>
          <div className="text-3xl font-mono font-semibold">
            {getUsername(props.user)}
          </div>
          <div className="flex m-3 space-x-1">
            <div className="flex font-mono">Email:</div>
            <div className="flex font-mono text-gray-500">
              {props.user.email}
            </div>
          </div>
          <div className="flex m-3 space-x-1">
            <div className="flex font-mono">Phone:</div>
            <div className="flex font-mono text-gray-500">
              {props.user.phone}
            </div>
          </div>
          <div className="flex m-3 space-x-1">
            <div className="flex font-mono">Age:</div>
            <div className="flex font-mono text-gray-500">
              {props.user.dob.age}
            </div>
          </div>
          <div className="flex m-3 space-x-1">
            <div className="flex font-mono">Address:</div>
            <div className="flex font-mono text-gray-500">
              {getAddress(props.user)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
