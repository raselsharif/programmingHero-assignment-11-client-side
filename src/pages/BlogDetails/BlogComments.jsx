import profile from "/profile.jpg";

const BlogComments = () => {
  return (
    <div className="shadow-sm shadow-[#155e75] py-3 px-4 mb-4  flex gap-7 max-w-xl mx-auto">
      <img
        src={profile}
        alt="comment image"
        className="h-12 w-12 rounded-full border border-[#155e75]"
      />
      <div className="">
        <p className="font-semibold text-lg">User name</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          inventore, incidunt facere architecto quia tempore est repudiandae.
          Iure reiciendis labore, accusantium impedit ex aut inventore.
        </p>
      </div>
    </div>
  );
};

export default BlogComments;
