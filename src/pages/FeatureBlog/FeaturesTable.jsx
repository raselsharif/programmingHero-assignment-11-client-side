import DataTable from "react-data-table-component";
import img from "/profile.jpg";

const FeaturesTable = () => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        border: "1px solid gray",
        borderBottom: "none",
        backgroundColor: "#155e75",
        color: "white",
        fontSize: "17px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        border: "1px solid gray",
        borderBottom: "none",
      },
    },
  };
  const columns = [
    {
      name: "SL No.",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Image",
      selector: (row) => row.image,
    },
  ];
  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      image: <img className="w-14" src={img} alt="" />,
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
      image: <img className="w-14" src={img} alt="" />,
    },
  ];
  return (
    <DataTable columns={columns} data={data} customStyles={customStyles} />
  );
};

export default FeaturesTable;
