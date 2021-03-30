interface UserDataItemProps {
  title: string;
  content: string;
}

export default function UserDataItem(props: UserDataItemProps): JSX.Element {
  return (
    <div className="flex m-3 space-x-1">
      <div className="flex font-mono">{props.title}</div>
      <div className="flex font-mono text-gray-500">{props.content}</div>
    </div>
  );
}
