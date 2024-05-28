import { CarPost } from "./DummyData";

function List(){
    return(
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {CarPost.map((item) => (
          <div
            key={item.id}
            className="border border-slate-300 bg-white shadow-md"
          >
            <div className="w-full h-[177px]">
              <img
                className="w-full h-full object-cover"
                src={item.imgPic}
                alt="imageIcon"
              />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between ">
                <h1 className=" text-[16.8px] text-[#002C52] font-bold">
                  {item.title}
                </h1>
                <p className="text-[#002C52] text-[15px] font-bold">
                  {item.amount}
                </p>
              </div>
              <div className="flex items-center text-[10px] md:text-[12px] font-medium justify-between">
                <span className="">{item.sublinkA}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>{item.sublinkB}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>{item.sublinkC}</span>
                <hr className="w-[0.1px] h-[10px] border border-gray-400" />
                <span>{item.sublinkD}</span>
              </div>
              <div className="text-[14px] font-medium leading-[22.4px] ">
                <h3 className="text-start  text-[16px]">{item.Feature}</h3>
                {item.subItems.map((subItems, Index) => {
                  return (
                    <ul className="flex items-center  " key={Index.id}>
                      <li className="" >{subItems}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}
export default List