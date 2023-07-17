// import PropTypes from "prop-types";
import { StatisticsList, Item, Span } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <StatisticsList>
      <Item>
        Good:
        <Span>{good}</Span>
      </Item>
      <Item>
        Neutral:
        <Span>{neutral}</Span>
      </Item>
      <Item>
        Bad:
        <Span>{bad}</Span>
      </Item>
      <Item>
        Total:
        <Span>{total}</Span>
      </Item>
      <Item>
        Positive Feddbacks:
        <Span>{positive}</Span>
      </Item>
    </StatisticsList>
  );
};
