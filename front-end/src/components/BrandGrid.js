import { Posts} from "./DummyData.js";
import BrandCard from "./BrandCard.js";

function BrandLink(){
    return (
        <div className="grid  grid-cols-2 lg:grid-cols-5 w-full lg:w-[1200px] mx-auto p-3 sm:p-3 gap-6 md:p-3 ">
        {Posts.map((post) => {
          return <BrandCard key={post.id} post={post} />;
        })}
      </div>
    )
}
export default BrandLink