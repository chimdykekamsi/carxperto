function BrandCard({ post }) {
  console.log(post);
  return (
    <div className="w-full  ">
      <div className="flex flex-col lg:flex lg:flex-col mt:p-0  gap-3">
        <div className="w-[80%] h-[80%] mx-auto lg:w-full lg:h-[210px] ">
          <img
            className=" h-full object-contain"
            src={post.photo}
            alt="imageIcon"
          />
        </div>
        <p className="text-[16px] font-bold ">{post.title}</p>
      </div>
    </div>
  );
}
export default BrandCard;
