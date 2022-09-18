import PropTypes from 'prop-types';
import FriendListItem from '../friendlistitem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem
                    id={id.toString()}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        })
    ),
}

export default FriendList;