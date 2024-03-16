import FriendListItem from '../friendListItem';
import css from '../frendList/friendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css['friendListBox']}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css['friendItem']}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
