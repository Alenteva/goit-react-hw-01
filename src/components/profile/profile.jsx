import PropTypes from 'prop-types';
import css from './profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css['userBox']}>
      <div>
        <img
          className={css['imgUser']}
          src={image}
          alt="User avatar"
          width="200"
        />
        <p className={css['userName']}>{name}</p>
        <p className={css['user']}> {tag}</p>
        <p className={css['user']}>{location}</p>
      </div>

      <ul className={css['userStatsBox']}>
        <li className={css['userStats']}>
          <span className={css['Stats']}>followers</span>
          <span className={css['StatsValue']}>{stats.followers}</span>
        </li>
        <li className={css['userStats']}>
          <span className={css['Stats']}>Views</span>
          <span className={css['StatsValue']}>{stats.views}</span>
        </li>
        <li className={css['userStats']}>
          <span className={css['Stats']}>Likes</span>
          <span className={css['StatsValue']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.number.isRequired,
// };

export default Profile;
