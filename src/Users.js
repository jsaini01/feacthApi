import React, { useState } from "react";
import axios from "axios";
import { Div } from "./styled";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const navigator = useNavigate();

  const Submit = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setData(res.data);
      console.table(res.data);

      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  const Action = (cur) => {
    const fetch = data.filter((item) => {
      return item.id === cur;
    });
    console.table(fetch);

    navigator("/user", { state: { fetch } });
  };

  return (
    <>
      <Div>
        <h1>Fetch Api</h1>
        <button type="Submit" onClick={Submit}>
          Submit
        </button>
        {/* <button onClick={Close}>Close</button> */}
        {show ? (
          <div>
            <table>
              <tr>
                <th>Id</th>
                <th>title</th>
                <th>body</th>
                <th>Actions</th>
              </tr>

              {data.map((items) => {
                const { id, title, body } = items;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                    <td>
                      <button onClick={() => Action(id)}>action</button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : null}
      </Div>
    </>
  );
};

export default Users;
