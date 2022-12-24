import react, { useState } from "react";
import Form from "./components/Form";
import Paper from "@mui/material/Paper";
import "./components/Last.css";
import Final from "./components/Final";
const APP = () => {
  const [change, setchange] = useState();
  const [arr, settarr] = useState([]);
  const [total, settotal] = useState(0);
  const [state, setstate] = useState(true);
  const [dis, setdis] = useState("");
  const apper = state ? `apper` : ``;
  console.log(apper);
  if (!state) {
    return (
      <div>
        <div className="asd">
          <div
            className={`ddd${apper}`}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Paper
              elevation={5}
              sx={{ width: "400px", backgroundColor: "#2F3C7E" }}
            >
              <Form
                state={state}
                setstate={setstate}
                total={total}
                change={change}
                arr={arr}
                settarr={settarr}
                setchange={setchange}
                settotal={settotal}
              ></Form>
            </Paper>
          </div>
          <Final setstate={setstate} state={state}></Final>
        </div>
        asdasd
      </div>
    );
  } else {
    return (
      <div className="asd">
        <div
          className={`ddd${apper}`}
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Paper
            elevation={5}
            sx={{ width: "400px", backgroundColor: "#2F3C7E" }}
          >
            <Form
              dis={dis}
              setdis={setdis}
              state={state}
              setstate={setstate}
              total={total}
              change={change}
              arr={arr}
              settarr={settarr}
              setchange={setchange}
              settotal={settotal}
            ></Form>
          </Paper>
        </div>
      </div>
    );
  }
};

export default APP;
