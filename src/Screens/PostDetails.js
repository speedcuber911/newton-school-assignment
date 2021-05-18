import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Collapse,
  Spinner,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Comment from "../components/Comments";

const PostDetails = (props) => {
  const [searchQuery, setQuery] = useState(null);
  const [postData, setPostData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const location = useLocation().search;
  const queryParams = new URLSearchParams(location);
  const history = useHistory();

  if (!searchQuery) setQuery(location);

  const toggleComments = () => {
    if (!comments.length) getComments();
    setIsOpen(!isOpen);
  };

  const deleteComments = () => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + queryParams.get("postId"),
      {
        method: "Delete",
      }
    )
      .then((buffer) => buffer.text())
      .then((response) => JSON.parse(response))
      .then((response) =>
        history.push("/posts?userId=" + queryParams.get("userId"))
      );
  };

  const getComments = () => {
    fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" +
        queryParams.get("postId")
    )
      .then((buffer) => buffer.text())
      .then((response) => JSON.parse(response))
      .then(setComments);
  };
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + queryParams.get("postId")
    )
      .then((buffer) => buffer.text())
      .then((response) => JSON.parse(response))
      .then(setPostData);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
      <Card>
        <CardHeader
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>Post#{queryParams.get("postId")}</div>
          <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
            <Button color="danger" onClick={deleteComments}>
              X
            </Button>
          </div>
        </CardHeader>
        {!postData ? (
          <CardBody>
            <Spinner color="primary">{""}</Spinner>
          </CardBody>
        ) : (
          <CardBody>
            <CardTitle tag="h5">{postData.title}</CardTitle>
            <CardText>{postData.body}</CardText>
          </CardBody>
        )}
        <CardFooter>
          <Button color="primary" onClick={toggleComments}>
            Toggle Comments
          </Button>
          <Collapse isOpen={isOpen} style={{ marginBottom: "1rem" }}>
            <CardBody>
              {comments.length ? (
                comments.map((comment) => <Comment {...comment} />)
              ) : (
                <Spinner>{""}</Spinner>
              )}
            </CardBody>
          </Collapse>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostDetails;
