import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Posts(props) {
  const [postData, setPosts] = useState(null);
  const [searchQuery, setQuery] = useState(null);
  const location = useLocation().search;
  if (!searchQuery) setQuery(location);
  useEffect(() => {
    if (searchQuery)
      fetch("http://jsonplaceholder.typicode.com/posts" + searchQuery)
        .then((buffer) => buffer.text())
        .then((response) => JSON.parse(response))
        .then(setPosts);
  }, []); //fetch posts for a user

  console.log(postData);
  return (
    <>
      {postData &&
        postData.map((postData) => (
          <Row>
            <Col md="3"></Col>
            <Col md="6" style={{ margin: "1%" }}>
              <Card body>
                <CardTitle tag="h5">{postData.title}</CardTitle>
                <CardText>{postData.body}</CardText>
                <Button color="primary">
                  <Link
                    to={`/details?postId${postData.id}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    Details
                  </Link>
                </Button>
              </Card>
            </Col>
            <Col md="3"></Col>
          </Row>
        ))}
    </>
  );
}

export default Posts;
