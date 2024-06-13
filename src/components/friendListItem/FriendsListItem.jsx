import styles from './FriendsListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles['friends-list_item']}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          styles['online-status_text'],
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};