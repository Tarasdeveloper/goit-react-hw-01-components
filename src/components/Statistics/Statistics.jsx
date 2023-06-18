import {
  LabelStat,
  Statistics,
  Title,
  StatList,
  ListItem,
  Percentage,
} from './Statistics.styled';

<Statistics>
  <Title>Upload stats</Title>

  <StatList>
    <ListItem>
      <LabelStat>.docx</LabelStat>
      <Percentage>4%</Percentage>
    </ListItem>
    <ListItem>
      <LabelStat>.mp3</LabelStat>
      <Percentage>14%</Percentage>
    </ListItem>
    <ListItem>
      <LabelStat>.pdf</LabelStat>
      <Percentage>41%</Percentage>
    </ListItem>
    <ListItem>
      <LabelStat>.mp4</LabelStat>
      <Percentage>12%</Percentage>
    </ListItem>
  </StatList>
</Statistics>;
