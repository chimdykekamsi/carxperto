export function TransactionCard1({ color, icon, title, value, footer }) {
    return (
     <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
        <div className="flex justify-between py-3 align-center text-white ">
            <div>
                Total Transactions
            </div>
            <div className="text-primary-normal" >
            <select name="" id="">
                <option value="">this week</option>
                <option value="">one month</option>
                <option value="">3 month</option>
                <option value="">6 months</option>
                <option value="">year</option>
            </select>
            </div>
        </div>
        <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-3 mt-5 text-primary-normal">
            <div className="text-start ">
                <h3 className="text-gray-400 lg:text-[15px] ">Total Transactions</h3>
                <p className="text-white text-xl ">28</p>
            </div>
            <div className="text-start ">
                <h3 className="text-gray-400">Total Sales</h3>
                <p className="text-white text-xl">$350,000</p>
            </div>
            <div className="text-start ">
                <h3 className="text-gray-400 text-[15px]">Average Sale Price</h3>
                <p className="text-white text-xl">$14,000</p>
            </div>
            
            
        </div>
     </div>
    );
  }