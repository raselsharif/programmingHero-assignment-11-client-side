import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useCategoriesApi = () => {
  //   const [categories, seCategories] = useState([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["categoryAPI"],
    queryFn: () => {
      axios.get("http://localhost:5000/v1/categories");
    },
  });
  if (isPending) {
    return <p>Data Loading...</p>;
  }
  if (error) {
    return <p>Data not loaded!</p>;
  }
  return data;
};

export default useCategoriesApi;
