import { Col, Table } from "reactstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Home(props) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((buffer) => buffer.text())
      .then((response) => JSON.parse(response))
      .then(setUserData);
  }, []);
  console.log(userData);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10%" }}>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Blog Posts</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((user, i) => (
              <tr scope="row">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.company.name}</td>
                <td>
                  <Link to={`posts?userId=${user.id}`}>
                    {" "}
                    Posts from {user.name}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
