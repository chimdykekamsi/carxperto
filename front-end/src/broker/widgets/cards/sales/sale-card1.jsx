import { BsFillPeopleFill } from "react-icons/bs";

export function HomeCard1({ color, icon, title, value, footer }) {
  return (
    <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
      <div className="flex justify-between py-3 align-center text-white ">
        <div>Contact Information</div>
        <div className=""></div>
      </div>
      <div className="mb-4 grid gap-3 grid-cols-2 md:grid-cols-2 text-primary-normal">
        <div className="text-start ">
          <h3 className="text-gray-400">Email</h3>
          <p className="text-white text-sm">Janenetsmith@gmail.com</p>
        </div>
        <div className="text-start ">
          <h3 className="text-gray-400 text-bold">Location</h3>
          <p className="text-white text-sm">San Jose, USA</p>
        </div>
      </div>
    </div>
  );
}
