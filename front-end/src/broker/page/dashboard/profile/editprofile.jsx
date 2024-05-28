import React from "react";
import { Stepper, Step, Button, Input, Textarea } from "@material-tailwind/react";
import DashboardNavbar from "../../../widgets/layout/dashboard-navbar";
import Sidenav from "../../../widgets/layout/sidenav";

const Editprofile = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="">
      <DashboardNavbar />
    <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" flex flex-col justify-center mt-7 w-[50%]  lg:ml-[30%]  ml-[15px] border shadow-lg p-3 mb-3 rounded-lg">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
      </Stepper>

      {activeStep === 0 && (
        <form className="border shadow-lg p-4 mb-3 rounded-lg">
          <div className="text-start text-primary-normal my-3 font-bold text-[15px]">
            Personal Detail
          </div>
          <div className="relative">
            <input type="file" className="absolute w-full h-full opacity-0" id="fileInput"/>
            <label htmlFor="fileInput">
              <img class="cursor-pointer object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://via.placeholder.com/150" alt="blog"/>
            </label>
          </div>
          <div className="flex gap-3 my-4">
            <div className="fullname w-full">
              <Input type="text" label="Fullname" />
            </div>
            <div className="username w-full">
              <Input type="text" label="Username" />
            </div>
          </div>
          <div className="email  my-4">
            <Input type="email" label="Email" />
          </div>
          <div className="street my-4">
            <Input type="text" label="Street" />
          </div>
          <div className="flex gap-3 my-4 w-full">
            <div className="state w-full">
              <Input type="text" label="State" />
            </div>
            <div className="city w-full">
              <Input type="text" label="City" />
            </div>
          </div>
          <div className="flex gap-3 my-4">
            <div className="postalcode w-full">
              <Input type="text" label="Postal Code" />
            </div>
            <div className="phone w-full">
              <Input type="text" label="Phone no" />
            </div>
          </div>
          <Button className="w-full bg-primary-normal" onClick={handleNext}>Continue</Button>
        </form>
      )}

      {activeStep === 1 && (
        <form className="border shadow-lg p-4 mb-3 rounded-lg">
          <div className="text-start text-primary-normal my-3 font-bold text-[15px]">
            Experience
          </div>
          <div className="  my-4">
            <Textarea type="text" label="description"  />
          </div>
          <div className=" my-4">
            <Input type="text" label="Years in Industry" />
          </div>
          <div className=" w-full my-4">
            <Textarea type="text" label="Specialities" />
          </div>
          <div className=" w-full my-4">
            <Textarea type="text" label="Expertise" />
          </div>
          <Button className="w-full bg-primary-normal" onClick={handleNext}>Continue</Button>
        </form>
      )}

      {activeStep === 2 && (
        <form className="border shadow-lg p-4 mb-3 rounded-lg">
          <div className="text-start text-primary-normal my-3 font-bold text-[15px]">
            Successful transactions
          </div>
          <div className=" my-4 ">
            <Input type="text" label="Total transactions" />
          </div>
          <div className=" my-4">
            <Input type="text" label="Average sales price" />
          </div>
          <div className=" my-4">
            <Input type="text" label="Client Satisfaction Rate" />
          </div>
          <Button className="w-full bg-primary-normal">Save</Button>
        </form>
      )}

      {/* <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div> */}
    </div>
    </div>
</div>
  );
}

export default Editprofile;
