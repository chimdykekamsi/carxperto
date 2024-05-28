import {Categorys} from "./DummyData.js";
import CategoryCard from "./CategoryCard.js";


function CategoryGrid(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4  w-full lg-max-[1200px] p-3 sm:p-3">
         
       {Categorys.map((cards) =>{
         return<CategoryCard key={cards.id} cards={cards}/>
       })}
      </div>
    )
}

export default CategoryGrid


// import { Posts} from "../pages/DummyData.js";
// import BrandCard from "./BrandCard.js";

// function BrandLink(){
//     return (
//         <div className="grid  grid-cols-2 lg:grid-cols-5">
//         {Posts.map((post) => {
//           return <BrandCard key={post.id} post={post} />;
//         })}
//       </div>
//     )
// }
// export default BrandLink