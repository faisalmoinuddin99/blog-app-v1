import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get(
    "http://blogbackendv1-env.eba-fkgydx9j.ap-northeast-1.elasticbeanstalk.com/v1/api/blogs/"
  );
};
export const useBlogsData = () => {
  return useQuery("blog-posts", fetchData);
};
