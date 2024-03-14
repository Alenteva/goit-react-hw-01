import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/profile/profile";
import userData from "./components/profile/userData.json";

import FriendList from "./components/frendList/friendList";
import friends from "./components/frendList/friends.json";

import TransactionHistory from "./components/transactionHistory/transactionHistory";
import transactions from "./components/transactionHistory/transactions.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
