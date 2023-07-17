import { List, Button } from "./FeedbacksOptions.styled";
// import PropTypes from 'prop-types';

export const FeedbacksOptions = ({ options, onFeedbackLeave }) => {
  return (
    <List>
      {options.map((option) => (
        <li key={option}>
          <Button
            type="button"
            option={option}
            onClick={() => onFeedbackLeave(option)}
          >
            {[option]}
          </Button>
        </li>
      ))}
    </List>
  );
};
