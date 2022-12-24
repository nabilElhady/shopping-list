import react from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Last.css";
import TextField from "@mui/material/TextField";
import Items from "./Items";
import BasicCard from "./Final";

const Form = ({
  dis,
  setdis,
  state,
  setstate,
  change,
  arr,
  setchange,
  settarr,
  settotal,
  total,
}) => {
  const changing = (e) => {
    setchange(e.target.value);
  };
  const clicked = (e) => {
    settarr([...arr, { text: change, id: Math.random() * 1000, items: 1 }]);
    setchange("");
    e.preventDefault();
  };

  return (
    <div>
      <Box
        onSubmit={clicked}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "space-between",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={change}
          disabled={!state ? `disabled` : ``}
          className="text"
          variant="filled"
          label="ADD item"
          fullWidth
          sx={{
            width: "225px",
          }}
          onChange={changing}
        />
        <Button
          className="but"
          dis
          variant="text"
          sx={{ width: "5px" }}
          disabled={!state ? `disabled` : ``}
          onClick={clicked}
        >
          ADD
        </Button>
      </Box>
      <Items
        dis={dis}
        setdis={setdis}
        state={state}
        setstate={setstate}
        total={total}
        settotal={settotal}
        settarr={settarr}
        arr={arr}
      ></Items>
    </div>
  );
};

export default Form;
