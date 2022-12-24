import React from "react";
import "./Last.css";
import useHover from "@react-hook/hover";
import { styles } from "@dash-ui/styles";
import BasicCard from "./Final";
export const Last = ({
  dis,
  setdis,
  state,
  setstate,
  clicked,
  settotal,
  elem,
  arr,
  settarr,
  plus,
  text,
  items,
  total,
}) => {
  const disabled = !state ? `disabled` : ``;

  const def = text?.length || 0;

  const change = () => {
    setstate(!state);
    console.log(state);
  };
  const positive = () => {
    settarr(
      arr.map((item) => {
        if (item.id === elem.id) {
          settotal(total + 1);
          return {
            ...item,
            items: items + 1,
          };
        }
        return item;
      })
    );
  };
  const negative = () => {
    settarr(
      arr.map((item) => {
        if (item.id === elem.id) {
          if (items > 0) {
            settotal(total - 1);
            return {
              ...item,
              items: items - 1,
            };
          } else {
            const newitems = arr.filter((item) => item.id !== elem.id);
            return {
              newitems,
            };
          }
        }
        return item;
      })
    );
  };
  {
    if (def) {
      return (
        <div>
          <div>
            <div className={`out${disabled}`}>
              <div className="out2" style={{ display: "flex" }}>
                <div>{text}</div>
                <div className="out3">
                  <button
                    disabled={!state ? `disabled` : ``}
                    onClick={negative}
                  >
                    -
                  </button>
                  <p>{items}</p>
                  <button
                    disabled={!state ? `disabled` : ``}
                    onClick={positive}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      arr.pop();
      return (
        <div>
          <button onClick={change} className="qsa">
            ok
          </button>

          {setstate(!state)}
          {console.log(dis)}
        </div>
      );
    }
  }
};
export default Last;
