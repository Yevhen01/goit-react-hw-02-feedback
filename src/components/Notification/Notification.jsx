import PropTypes from "prop-types";
import { NoteMessage } from "./Notification.styled";

export const Notification = ({ message }) => (
  <NoteMessage>{message}</NoteMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
