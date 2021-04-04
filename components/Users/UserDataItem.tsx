interface UserDataItemProps {
  title: string;
  content: string;
}

export const UserDataItem = ({
  title,
  content,
}: UserDataItemProps): JSX.Element => {
  return (
    <div className="flex m-3 space-x-1">
      <div className="flex font-mono">{title}</div>
      <div className="flex font-mono text-gray-500">{content}</div>
    </div>
  );
};
