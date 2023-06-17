import {
  Avatar,
  Description,
  Label,
  List,
  Name,
  Paragr,
  Profiles,
  Quantity,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profiles>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Paragr>{tag}</Paragr>
        <Paragr>{location}</Paragr>
      </Description>

      <Stats>
        <List>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </List>
        <List>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </List>
        <List>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </List>
      </Stats>
    </Profiles>
  );
};
