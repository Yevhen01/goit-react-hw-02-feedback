import PropTypes from 'prop-types';
import { Wrap, Title } from './FeedbackSection.styled';

export const FeedbackSection = ({ title, children }) => (
  <Wrap>
    <Title>{title}</Title>
    {children}
  </Wrap>
);

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
