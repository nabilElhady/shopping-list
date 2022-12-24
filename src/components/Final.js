import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "./Last.css";

export default function BasicCard({ setstate, state }) {
  return (
    <Paper
      elevation={6}
      sx={{ width: "500px", backgroundColor: "red" }}
      className="card"
    >
      <h1 style={{ fontSize: "40px" }}>the field is empty</h1>
      <button
        style={{
          width: "70%",
          height: "30%",
          fontSize: "40px",
          fontWeight: "600",
        }}
        className="button"
        onClick={() => {
          setstate(!state);
        }}
      >
        OK
      </button>
    </Paper>
  );
}
