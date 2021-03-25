import { useEffect, useState } from "react";
import { fetchData, getUsername, UserInfo } from "../../utils/userData";
import User from "./User";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroll-component";

export default function App(): JSX.Element {
  const [userInfos, setUserInfos] = useState<any>([]);
  useEffect(() => {
    fetchData().then((data) => {
      setUserInfos(data.results);
    });
  }, []);
  const getOneMore = () => {
    setTimeout(() => {
      fetchData().then((data) => {
        setUserInfos(userInfos.concat(data.results));
      });
    }, 2000);
  };
  return (
    <div>
      <title>Random Users</title>
      <Header />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />
      <InfiniteScroll
        dataLength={userInfos.length}
        next={getOneMore}
        hasMore={true}
        loader={<div className="loader"></div>}
      >
        {userInfos.map((user: UserInfo, idx: number) => (
          <div key={idx}>
            <User user={user} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
