import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import { fetchData } from "../utils/userData";
import { UserInfo } from "../utils/userInterface";
import User from "./User";
import Header from "./Header";

export default function App(): JSX.Element {
  const [userInfos, setUserInfos] = useState<any>([]);
  const getOneMore = () => {
    setTimeout(() => {
      fetchData().then((data) => {
        setUserInfos(userInfos.concat(data.results));
      });
    }, 250);
  };
  return (
    <div>
      <Head>
        <title>Random Users</title>
      </Head>
      <Header />
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
