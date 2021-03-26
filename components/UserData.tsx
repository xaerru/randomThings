interface UserDataProps {
  title: string;
  content: string | number;
}

export default function UserData(props: UserDataProps): JSX.Element {
  return (
    <div className="flex m-3 space-x-1">
      <div className="flex font-mono">{props.title}</div>
      <div className="flex font-mono text-gray-500">{props.content}</div>
    </div>
  );
}
