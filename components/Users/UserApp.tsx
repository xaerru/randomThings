import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import { fetchData } from "../../utils/userData";
import { UserInfo } from "../../utils/userInterface";
import { User } from "./User";
import { Header } from "../Header";

export const UserApp = (): JSX.Element => {
  const [userInfos, setUserInfos] = useState<UserInfo[]>([]);
  return (
    <div>
      <Head>
        <title>Random Users</title>
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <InfiniteScroll
        dataLength={userInfos.length}
        next={(): void => {
          fetchData().then(({ results }) => {
            setUserInfos(userInfos.concat(results));
          });
        }}
        hasMore
        loader={<div className="loader" />}
        style={{ overflow: "hidden" }}
      >
        {userInfos.map((user: UserInfo) => (
          <User user={user} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
