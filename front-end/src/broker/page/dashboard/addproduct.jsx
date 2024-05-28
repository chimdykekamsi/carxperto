import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import { Input,Textarea } from "@material-tailwind/react";

export function Addproduct() {
   
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
        
        <div className=" mb-6  flex justify-between mr-4">
            <div>
                <h3 className="text-xl text-primary-normal pb-3 text-start" >Add new list</h3>
            </div>
            <div className="flex gap-4 align-center">
                <div>
                    <button className="flex items-center gap-2 bg-green-900 text-white px-4 py-2 round-md">
                        {/* <IoMdAdd className="h-5 w-5" /> */}
                        Save as Draft
                    </button>
                </div>
               <div>
                <button className="flex items-center gap-2 bg-primary-normal text-white px-3 py-2 round-md ">
                        {/* <IoMdAdd className="h-5 w-5" /> */}
                        Save & Publish
                </button>
               </div>
                
            </div>
        </div>
        <div class="flex gap-4">
        
        <div class="w-[60%] p-6 border mb-7 shadow-lg rounded-lg">
            
            <form>
                {/* <div class="mb-4">
                    <label for="name" class="block text-gray-700">Name:</label>
                    <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded"/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded"/>
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-700">Message:</label>
                    <textarea id="message" name="message" class="w-full px-3 py-2 border rounded" rows="4"></textarea>
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button> */}
                 <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Product Name:</label>
                    <Input type="text" label="Enter Product Name" className="w-full"/>
                </div>
                 <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Short description:</label>
                    <Input type="text" label="Please enter details" className="w-full"/>
                </div>
                 <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Long description:</label>
                 <Textarea type="text" label="Please enter full details" /> 
                </div>
                <div className="flex gap-4 mb-4">
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Selling Price:</label>
                    <Input type="text" label="Enter your selling price" className="w-full"/>
                </div>
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Cost Price:</label>
                    <Input type="text" label="Enter your Cost price" className="w-full"/>
                </div>
                </div>
                <div className="flex gap-4 mb-4">
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Make:</label>
                    <Input type="text" label="Enter the Make of your product" className="w-full"/>
                </div>
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Model:</label>
                    <Input type="text" label="Enter the make of your model" className="w-full"/>
                </div>
                </div>
                <div className="flex gap-4 mb-4">
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Year:</label>
                    <Input type="text" label="Enter the year of production" className="w-full"/>
                </div>
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Mileage:</label>
                    <Input type="text" label="Enter the mileage of production" className="w-full"/>
                </div>
                </div>
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Quantity in stock:</label>
                    <Input type="text" label="Enter stock number" className="w-full"/>
                </div>
                <div className="flex justify-between mb-4">
                    <p>Discount</p>
                    <label class="relative mb-5 cursor-pointer">
                        <input type="checkbox" value="" class="peer sr-only" />
                        <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
                    </label>
                </div>
                <div className="flex gap-4 mb-4">
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Type:</label>
                    <Input type="text" label="Enter the type of discount" className="w-full"/>
                </div>
                <div className="w-full mb-4">
                    <label for="name" className="block text-primary-normal text-start pb-3">Value:</label>
                    <Input type="text" label="Enter the value of the discount" className="w-full"/>
                </div>
                </div>
            </form>
        </div>

        
        <div class="w-[35%] h-[50%] p-6 border mb-7 shadow-lg rounded-lg">
                    <div>
                    <div
        className="w-[300px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6"
        id="dropzone"
        >
        <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
            <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                />
            </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
        </div>
        <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
        </div>
            </div>
            <div className="flex gap-2 mt-5 ">
            <div>
                    <div
        className="w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6"
        id="dropzone"
        >
        <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
            <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                />
            </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
        </div>
        <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
        </div>
            </div>
            <div>
            <div
        className="w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6"
        id="dropzone"
        >
        <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
            <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                />
            </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
        </div>
        <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
        </div>
            </div>
            </div>
            <div className="flex gap-2 mt-5 ">
            <div>
                    <div
        className="w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6"
        id="dropzone"
        >
        <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
            <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                />
            </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
        </div>
        <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
        </div>
            </div>
            <div>
            <div
        className="w-[150px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6"
        id="dropzone"
        >
        <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
        />
        <div className="text-center">
            <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt=""
            />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                />
            </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
        </div>
        <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
        </div>
            </div>
            </div>
            
        </div>
    </div>
        
        </div>
    </div>
      
    </div>
   
  );
}

export default Addproduct;
