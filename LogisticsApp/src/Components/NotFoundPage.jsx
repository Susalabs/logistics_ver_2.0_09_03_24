import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404 Not Found</h1>
        <p style={styles.description}>
          Oops! The page you are looking for might be in another universe.
        </p>
        <Link to="/" style={styles.link}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#F0F0F0", // Light gray background
  },
  content: {
    textAlign: "center",
    color: "#333", // Dark text color
  },
  title: {
    fontSize: "4em",
    margin: "0",
    color: "#FF4500", // Orange title color
  },
  description: {
    fontSize: "1.2em",
    color: "#666",
  },
  link: {
    display: "block",
    marginTop: "20px",
    fontSize: "1.2em",
    color: "#007BFF", // Blue link color
    textDecoration: "none",
  },
};

export default NotFoundPage;
