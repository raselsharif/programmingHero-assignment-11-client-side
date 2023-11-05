import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoading from "../pages/Loadings/SkeletonLoading";

const useCategoriesApi = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["categoryAPI"],
    queryFn: () => {
      return axios.get("http://localhost:5000/v1/categories");
    },
  });
  if (isPending) {
    return <SkeletonLoading />;
  }
  if (error) {
    return <p>Data not loaded!</p>;
  }
  return data;
};

export default useCategoriesApi;
