import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { FaRegEdit } from "react-icons/fa";
 
export function SubEdit() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawer = () => setOpenRight(true);
  const closeDrawer = () => setOpenRight(false);
 
  return (
    <React.Fragment>
        {/* <Button className='bg-primary-normal' onClick={openDrawer}>Create Plan</Button> */}
        <div className='text-primary-normal flex gap-2 ' onClick={openDrawer} style={{cursor: 'pointer'}}>
        Edit Plan <FaRegEdit className='mt-1'/>
      </div>
       {/* <div className='text-red-700 flex gap-2 w-72' style={{cursor: 'pointer'}} >Deactivate Plan <RiDeleteBin6Line className='mt-1'/> </div> */}
        <Drawer open={openRight} onClose={closeDrawer} placement="right">
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="primary-normal" className="text-[13px] text-primary-normal">
            Edit Subscription Plan
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          
        </div>
        <form className="flex flex-col gap-4 p-4">
          
          <Input type="text" label="Plan Name" />
          <Input type='text' label="price" />
          <Textarea rows={6} label="features" />
          <div className="w-72">
        <Select label="Duration">
            <Option>Monthly</Option>
            <Option>Yearly</Option>
        </Select>
        </div>
          <div className="w-72">
        <Select label="Status">
            <Option>Active</Option>
            <Option>Pending</Option>
            <Option>Expired</Option>
        </Select>
        </div>
        <div className="flex justify-end">
        <Button className="bg-primary-normal">Update Plan</Button>
        </div>
          
        </form>
      </Drawer>
    </React.Fragment>
  );
}