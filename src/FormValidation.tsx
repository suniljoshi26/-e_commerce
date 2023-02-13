import { useField, useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const FormValidation = () => {
  function callApi(values: any) {
    console.log("call api", values.email, values.password);
  }

  const schma = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: callApi,
      validationSchema: schma,
    });
  return (
    <div className=" flex flex-col justify-center items-center  mt-52 ">
      <form
        className=" p-2 border rounded-md bg-gray-300  w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl  text-center">Form Validation with formik</h1>
        <div className="flex flex-col mt-8 ">
          <label htmlFor="email" className=" sr-only">
            Email
          </label>
          <input
            id="email"
            placeholder="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-1 border border-gray-500  rounded-t-md appearance-none  mt-3 focus:ring-2 focus: ring-blue-300 focus:outline-none"
          />
          {touched.email && errors.email && (
            <div className=" text-red-500">{errors.email}</div>
          )}

          <label htmlFor="password" className=" sr-only">
            Email
          </label>
          <input
            id="password"
            placeholder="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-1 border border-gray-500  rounded-t-md mt-3 appearance-none focus:ring-2 focus: ring-blue-300 focus:outline-none"
          />
          {touched.password && errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>
        <div className=" text-end">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500  mt-2 rounded-md text-white   "
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
