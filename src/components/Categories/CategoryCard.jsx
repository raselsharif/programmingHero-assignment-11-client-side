const CategoryCard = ({ item }) => {
  return (
    <div className="border py-4 px-3 font-medium shadow-sm shadow-blue-400 animate-pulse">
      <h3>{item.category}</h3>
    </div>
  );
};

export default CategoryCard;
