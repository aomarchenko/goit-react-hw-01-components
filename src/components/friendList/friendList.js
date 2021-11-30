import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;

  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <span className={friend.isOnline}></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p class={friend.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
