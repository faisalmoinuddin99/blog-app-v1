import axios from "axios";
import { useQuery } from "react-query";

const fetchBlogData = (blogId) => {
  // const blogId = queryKey[1];
  const { id } = blogId;

  return axios.get(
    `http://blogbackendv1-env.eba-fkgydx9j.ap-northeast-1.elasticbeanstalk.com/v1/api/blogs/${Number(
      id
    )}`
  );
};
export const useBlogDetailedData = (id) => {
  return useQuery(["blog-detail", id], () => fetchBlogData(id));
};
