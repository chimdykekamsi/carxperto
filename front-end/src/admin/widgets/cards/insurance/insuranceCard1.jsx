export function InsuranceCard1({ color, icon, title, value, footer }) {
    return (
     <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg  " style={{ borderLeft: '5px solid #00c6bc' }}>
        <div className="flex justify-between py-3 align-center text-primary-normal">
            <div>
                  XYZ Insurance
            </div>
            {/* <div className="" >
            <select name="" id="">
                <option value="">this week</option>
                <option value="">one month</option>
                <option value="">3 month</option>
                <option value="">6 months</option>
                <option value="">year</option>
            </select>
            </div> */}
        </div>
        <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-2 mt-5 text-primary-normal">
            <div className="text-start ">
                <h3 className="text-gray-400">Contact</h3>
                <p className="text-black-900 text-[13px] ">info@insurance.com</p>
            </div>
            <div className="text-start ">
                <h3 className="text-gray-400">Phone no</h3>
                <p className="text-black-900 text-[13px] ">+1 (123) 456-7890</p>
            </div>
  
        </div>
        
     </div>
    );
  }