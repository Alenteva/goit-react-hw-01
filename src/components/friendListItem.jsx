import PropTypes from 'prop-types';
import css from './frendList/friendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="65" />
      <p className={css['frendListName']}>{name}</p>
      <p className={isOnline ? css['Online'] : css['Offline']}>
        {isOnline ? 'Online ' : 'Offline'}
      </p>
    </div>
  );
};

// FriendListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string,
//   isOnline: PropTypes.string.isRequired,
// };

export default FriendListItem;
