import {
  AvatarFriends,
  Friendsitem,
  NameFriends,
  StatusFriends,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friendsitem>
      <StatusFriends status={isOnline}></StatusFriends>
      <AvatarFriends src={avatar} alt={name} width="48" />
      <NameFriends>{name}</NameFriends>
    </Friendsitem>
  );
};
