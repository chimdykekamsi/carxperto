import * as Yup from 'yup';
import { useFormik } from 'formik';
import Sidenav from '../../widgets/layout/sidenav';
import { Input, Textarea } from '@material-tailwind/react';
import DashboardNavbar from '../../widgets/layout/dashboard-navbar';

export function Addproduct() {
  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      shortDescription: '',
      longDescription: '',
      costPrice: '',
      sellingPrice: '',
      color: '',
      condition: '',
      make: '',
      model: '',
      year: '',
      milleage: '',
      quantity: '',
      discount: Yup.boolean,
      discountType: '',
      discountValue: '',
      images: []
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('value is required'),
      category: Yup.string().required('value is required'),
      shortDescription: Yup.string().required('value is required'),
      longDescription: Yup.string().required('value is required'),
      costPrice: Yup.string().required('value is required'),
      sellingPrice: Yup.string().required('value is required'),
      color: Yup.string().required('value is required'),
      condition: Yup.string().required('value is required'),
      make: Yup.string().required('value is required'),
      model: Yup.string().required('value is required'),
      year: Yup.string().required('value is required'),
      milleage: Yup.string().required('value is required'),
      quantity: Yup.string().required('value is required'),
      discount: Yup.boolean().required('value is required'),
      discountType: Yup.string().required('value is required'),
      discountValue: Yup.string().required('value is required'),
      images: Yup.array()
        .min(1, 'At least one image is required')
        .of(
          Yup.mixed()
            .test('fileType', 'Unsupported file format', (value) =>
              ['image/jpeg', 'image/png', 'image/gif'].includes(value?.type)
            )
            .test('fileSize', 'File too large', (value) => value && value.size <= 5000000)
        )
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
      console.log(values.images);
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className=''>
      <DashboardNavbar />
      <div className='flex flex-row  overflow-hidden'>
        <div className=''>
          <Sidenav />
        </div>
        <div className=' mt-7 w-[90%] lg:ml-[20%] ml-[15px]'>
          <form onSubmit={formik.handleSubmit}>
            <div className=' mb-6  flex justify-between mr-4'>
              <div>
                <h3 className='text-xl text-primary-normal pb-3 text-start'>Add new list</h3>
              </div>
              <div className='flex gap-4 align-center'>
                <div>
                  <button
                    type='submit'
                    className='flex items-center gap-2 bg-green-900 text-white px-4 py-2 round-md'
                  >
                    {/* <IoMdAdd className="h-5 w-5" /> */}
                    Save as Draft
                  </button>
                </div>
                <div>
                  <button
                    type='submit'
                    onClick={formik.handleSubmit}
                    className='flex items-center gap-2 bg-primary-normal text-white px-3 py-2 round-md '
                  >
                    {/* <IoMdAdd className="h-5 w-5" /> */}
                    Save & Publish
                  </button>
                </div>
              </div>
            </div>
            <div class='flex gap-4'>
              <div class='w-[60%] p-6 border mb-7 shadow-lg rounded-lg'>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Product Name:
                  </label>
                  <Input
                    type='text'
                    name='name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    label='Enter Product Name'
                    className='w-full'
                  />
                </div>
                <div className='w-full mb-4'>
                  <label htmlFor='images'>Upload Images</label>
                  <input
                    id='images'
                    name='images'
                    type='file'
                    multiple
                    onChange={(event) => {
                      const files = Array.from(event.currentTarget.files);
                      formik.setFieldValue('images', [...formik.values.images, ...files]);
                    }}
                  />
                </div>
                <div>
                  {formik.values.images &&
                    formik.values.images.map((file, index) => (
                      <div key={index}>
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`preview ${index}`}
                          style={{ width: '100px', height: '100px' }}
                        />
                        <button
                          type='button'
                          onClick={() => {
                            const newImages = formik.values.images.filter((_, i) => i !== index);
                            formik.setFieldValue('images', newImages);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Category:
                  </label>
                  <Input
                    type='text'
                    label='Enter Product Category'
                    name='category'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                    className='w-full'
                  />
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Short description:
                  </label>
                  <Input
                    type='text'
                    name='shortDescription'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shortDescription}
                    label='Please enter details'
                    className='w-full'
                  />
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Long description:
                  </label>
                  <Textarea
                    type='text'
                    name='longDescription'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.longDescription}
                    label='Please enter full details'
                  />
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Selling Price:
                    </label>
                    <Input
                      type='text'
                      name='sellingPrice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sellingPrice}
                      label='Enter your selling price'
                      className='w-full'
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Cost Price:
                    </label>
                    <Input
                      type='text'
                      name='costPrice'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.costPrice}
                      label='Enter your Cost price'
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      color:
                    </label>
                    <Input
                      type='text'
                      name='color'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.color}
                      label='Enter your selling price'
                      className='w-full'
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      condition:
                    </label>
                    <Input
                      type='text'
                      name='condition'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.condition}
                      label='Enter your Cost price'
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Make:
                    </label>
                    <Input
                      type='text'
                      name='make'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.make}
                      label='Enter the Make of your product'
                      className='w-full'
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Model:
                    </label>
                    <Input
                      type='text'
                      name='model'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                      label='Enter the make of your model'
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Year:
                    </label>
                    <Input
                      type='text'
                      name='year'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.year}
                      label='Enter the year of production'
                      className='w-full'
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Mileage:
                    </label>
                    <Input
                      type='text'
                      name='milleage'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.milleage}
                      label='Enter the mileage of production'
                      className='w-full'
                    />
                  </div>
                </div>
                <div className='w-full mb-4'>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Quantity in stock:
                  </label>
                  <Input
                    type='text'
                    name='quantity'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                    label='Enter stock number'
                    className='w-full'
                  />
                </div>
                <div className='flex justify-between mb-4'>
                  <p>Discount</p>
                  <label class='relative mb-5 cursor-pointer'>
                    <input
                      type='checkbox'
                      name='discount'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.discount}
                      class='peer sr-only'
                    />
                    <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
                  </label>
                </div>
                <div className='flex gap-4 mb-4'>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Type:
                    </label>
                    <Input
                      type='text'
                      name='discountType'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.discountType}
                      label='Enter the type of discount'
                      className='w-full'
                    />
                  </div>
                  <div className='w-full mb-4'>
                    <label for='name' className='block text-primary-normal text-start pb-3'>
                      Value:
                    </label>
                    <Input
                      type='text'
                      name='discountValue'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.discountValue}
                      label='Enter the value of the discount'
                      className='w-full'
                    />
                  </div>
                </div>
              </div>

              {/* <div class='w-[35%] h-[50%] p-6 border mb-7 shadow-lg rounded-lg'>
                <div>
                  <label for='name' className='block text-primary-normal text-start pb-3'>
                    Upload image:
                  </label>
                  <div
                    className='w-[300px]  relative border-2 border-gray-300 border-dashed rounded-lg p-6'
                    id='dropzone'
                  >
                    <input type='file' className='absolute inset-0 w-full h-full opacity-0 z-50' />
                    <div className='text-center'>
                      <img
                        className='mx-auto h-12 w-12'
                        src='https://www.svgrepo.com/show/357902/image-upload.svg'
                        alt=''
                      />
                      <h3 className='mt-2 text-sm font-medium text-gray-900'>
                        <label htmlFor='file-upload' className='relative cursor-pointer'>
                          <span>Drag and drop</span>
                          <span className='text-indigo-600'> or browse</span>
                          <span>to upload</span>
                          <input
                            id='file-upload'
                            name='images'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.images}
                            type='file'
                            className='sr-only'
                            accept='image/png,image/jpeg,image/gif'
                            multiple
                          />
                        </label>
                      </h3>
                      <p className='mt-1 text-xs text-gray-500'>PNG, JPG, GIF up to 3MB</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
