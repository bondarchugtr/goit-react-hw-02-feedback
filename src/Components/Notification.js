import React from "react";
import PropTypes from "prop-types";
// import s from "./Feedback.module.css";

const Notification = ({ message = "" }) => {
  return <>{message && <span>{message}</span>}</>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
