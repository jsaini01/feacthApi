import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Div } from "./styled";

const Data = () => {
  const location = useLocation();
  const [data] = useState(location.state.fetch[0]);

  return (
    <>
      <Div>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        </table>
      </Div>
    </>
  );
};

export default Data;
