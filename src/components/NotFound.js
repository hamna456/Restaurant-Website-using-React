import React from "react";
import NotFoundImg from "../assets/images/notFound-img.gif";
import Button from "@mui/material/Button";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={NotFoundImg} alt="Not Found" style={{ width: "50%" }} />
      <Button
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "#ffc107",
          "&:hover": {
            bgcolor: "#ffc107",
            color: "black",
          },
          width: "200px",
          height: "60px",
          fontSize: "1.5rem",
          borderRadius: "10px",
          border: "3px solid #ffc107",
        }}
        onClick={() => window.location.href="/"}
      >
        Go Back To Home
      </Button>
    </div>
  );
};

export default NotFound;
