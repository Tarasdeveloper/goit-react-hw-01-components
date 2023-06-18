import {
  LabelStat,
  Title,
  StatList,
  ListItem,
  Percentage,
  Statistic,
} from './Statistics.styled';

import { randomColor } from './randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(sts => (
          <ListItem key={sts.id} style={{ backgroundColor: randomColor() }}>
            <LabelStat>{sts.label}</LabelStat>
            <Percentage>{sts.percentage}%</Percentage>
          </ListItem>
        ))}
      </StatList>
    </Statistic>
  );
};
