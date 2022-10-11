import axios from "axios";
import React, { useState, useEffect } from "react";

import { useBlogsData } from "../hooks/useBlogsData";
import ActionAreaCard from "./ActionAreaCard";

const Home = () => {
  // const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/v1/api/blogs/")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);
  const { isLoading, data, isError, error } = useBlogsData();
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3 style={{ color: "red" }}>{error.message}</h3>;
  }
  return (
    <div>
      <h3>Blog App</h3>
      {data?.data.map((blog) => {
        const { id, title, author, content, imageURL } = blog;
        return (
          <div key={id}>
            <ActionAreaCard
              title={title}
              content={content}
              imageURL={imageURL}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
