import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;
  const status = [];

  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span className="green">""</span>
          <span className={'' + (friend.isOnline ? 'green' : '')}></span>
          {/* <span style={{ background: friend.isOnline ? 'green' : 'red' }}></span> */}
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p class={friend.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
