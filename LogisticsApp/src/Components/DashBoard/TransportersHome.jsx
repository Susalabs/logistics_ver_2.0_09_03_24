import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import { Table } from "antd"; 
import ApexChart from "./Chart/Chart";
// import ChartComponent from "./Chart/Chart";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
function GroupExample() {
  return (
    <>
      <div className="cards">
        <CardGroup>
          <Card
            style={{
              backgroundColor: "rgb(13 202 240)",
              margin: "10px",
              borderRadius: "25px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "50px" }}>
                50
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Total request made
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card
            style={{
              backgroundColor: "rgb(13 202 240)",
              margin: "10px",
              borderRadius: "25px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "50px" }}>
                35
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Total request made
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card
            style={{
              backgroundColor: "rgb(13 202 240)",
              margin: "10px",
              borderRadius: "25px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "50px" }}>
                150
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Total request made
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card
            style={{
              backgroundColor: "rgb(13 202 240)",
              margin: "10px",
              borderRadius: "25px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "50px" }}>
                350
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Total request made
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div>
        <h1>Chart</h1>
        {/* <ChartComponent/> */}
        <ApexChart/>
      </div>
      <div className="tables">
        {" "}
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  );
}

export default GroupExample;
