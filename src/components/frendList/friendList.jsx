import FriendListItem from "../frendList/friendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
