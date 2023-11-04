import NewsLetter from "../../components/NewsLetter/NewsLetter";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentBlog></RecentBlog>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
