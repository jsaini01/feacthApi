import styled from "styled-components";

export const Div = styled.div`
  text-align: center;

  button {
    margin: 5vh 1vw;
    background: linear-gradient(to top right, blue, lightgreen);
    border: none;
    border-radius: 10px;
    padding: 0.5vw 2vw;
    font-weight: bold;
    font-family: Arial;
    color: white;
    font-size: 1.5vw;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 5px 5px 5px grey;
  }
  button:hover {
    background: linear-gradient(to top left, blue, lightgreen);
  }
  button:active {
    box-shadow: 1px 1px 1px grey;
  }

  table {
    text-transform: capitalize;
    margin: 2vw;
    border-collapse: collapse;
  }

  td {
    border: solid black;
    border-collapse: collapse;
    padding: 0.5vw;
    background-color: orange;
    transition: 2s;
  }
  td:hover {
    background: linear-gradient(to top right, lightgreen, blue);
  }
  th {
    font-size: 2vw;
    padding: 1vw 2vw;
    border: solid black;
    border-collapse: collapse;
    background-color: limegreen;
  }
`;
