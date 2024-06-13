import styles from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendsListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friends-list']}>
      {friends.map(({ id, ...friendListProps }) => {
        return (
          <li key={id}>
            <FriendListItem {...friendListProps} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};