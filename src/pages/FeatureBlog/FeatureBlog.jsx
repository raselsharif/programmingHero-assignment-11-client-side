import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "react-data-table-component";
import SkeletonLoading from "../Loadings/SkeletonLoading";

const FeatureBlog = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["top-ten-post"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/v1/top-ten-features");
      return res;
    },
  });
  if (isPending) {
    return <SkeletonLoading />;
  }
  console.log(data?.data);
  const customStyles = {
    headCells: {
      style: {
        border: "1px solid gray",
        borderBottom: "none",
        backgroundColor: "#155e75",
        color: "white",
        fontSize: "17px",
      },
    },
    cells: {
      style: {
        border: "1px solid gray",
        borderBottom: "none",
        padding: "5px 10px",
      },
    },
  };
  const columns = [
    {
      name: "SL No.",
      selector: (row, index) => index + 1,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Owner",
      selector: (row) => row.user_name,
    },
    {
      name: "Image",
      selector: (row) => (
        <img className="rounded-full h-16 w-16" src={row.user_img} />
      ),
    },
  ];
  const loadedData = [...data?.data];
  return (
    <div className="my-10 border">
      <DataTable
        columns={columns}
        data={loadedData}
        customStyles={customStyles}
      />
    </div>
  );
};

export default FeatureBlog;
