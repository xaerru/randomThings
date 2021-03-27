import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import { fetchData, getUsername } from "../utils/userData";
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
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
