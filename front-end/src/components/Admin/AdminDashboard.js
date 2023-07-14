import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import apiService from "../../api/queryApi";

const tableStyle = {
  width: "100%",
};

const AdminDashboard = () => {
  const [dataList, updateDataList] = useState([]);
  const [keys, updateKeys] = useState([]);
  useEffect(() => {
    apiService.listApi("GET").then(
      (res) => {
        const objKeys = Object.keys(res.data.data[0]).map((res) =>
          res.toUpperCase()
        );
        updateDataList([...res.data.data]);
        updateKeys(objKeys);
      },
      (err) => console.error(err)
    );
  }, []);

  console.log("Data List :: ", dataList);
  const createList = (res) =>
    Object.values(res).map((res2, index2) => <td key={index2}>{res2}</td>);

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          {keys.map((res, index) => (
            <th key={index}>{res}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.length &&
          dataList.map((res, index) => {
            return <tr key={index}>{createList(res)}</tr>;
          })}
        {/* <tr>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
        </tr>
        <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default AdminDashboard;
