import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const FormikInput = () => {
  const CallApi = (values: any) => {
    console.log(values);
  };
  // let a = [];
  // for (let i = 0; i <= 100; i++) {
  //   console.log(i);
  //   a.push(i);
  // }
  // const d = a.reduce((p, c) => {
  //   return p + c;
  // });
  // console.log("d", d / a.length);
  // // console.log(a);
  // const b = a.filter((i) => i % 2 == 0);
  // const c = a.filter((i) => i % 2 == 1);
  // console.log("even", b);
  // console.log("odd", c);
  const schema = yup.object().shape({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    age: yup.number().min(18).required(),
    email: yup.string().email().required(),
    password: yup.number().min(8).required(),
  });
  const { touched, errors, handleBlur, handleChange, handleSubmit, values } =
    useFormik({
      initialValues: {
        FirstName: "",
        LastName: "",
        age: "",
        email: "",
        password: "",
      },
      onSubmit: CallApi,
      validationSchema: schema,
    });

  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className=" text-2xl m"> formik validation</h1>

      <form
        className="flex flex-col  justify-center w-96 mt-4"
        onSubmit={handleSubmit}
      >
        <label className=" " htmlFor=" FirstName">
          First-name
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.FirstName}
          className="p-2 border border-gray-500  "
          id="FirstName"
          placeholder="FirstName"
          type="text"
          name="FirstName"
          required
          autoComplete="FirstName"
        />
        {touched.FirstName && errors.FirstName && (
          <div className=" text-red-600">{errors.FirstName}</div>
        )}
        <label className=" " htmlFor=" LastName">
          Last-name
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.LastName}
          className="p-2 border border-gray-500  "
          id="LastName"
          placeholder="LastName"
          type="text"
          name="LastName"
          required
          autoComplete="LastName"
        />
        {touched.LastName && errors.LastName && (
          <div className=" text-red-600">{errors.LastName}</div>
        )}

        <label className=" " htmlFor=" age">
          age
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          className="p-2 border border-gray-500     "
          id="age"
          placeholder="age"
          type="number"
          name="age"
          required
          autoComplete="age"
        />
        {touched.age && errors.age && (
          <div className=" text-red-600">{errors.FirstName}</div>
        )}
        <label className=" " htmlFor=" email">
          email
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="p-2 border border-gray-500     "
          id="email"
          placeholder="email"
          type="email"
          name="email"
          required
          autoComplete="email"
        />
        {touched.email && errors.email && (
          <div className=" text-red-600">{errors.FirstName}</div>
        )}
        <label className=" " htmlFor=" password">
          Password
        </label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="p-2 border border-gray-500     "
          id="password"
          placeholder="password"
          type="number"
          name="password"
          required
          autoComplete="password"
        />
        {touched.password && errors.password && (
          <div className=" text-red-600">{errors.FirstName}</div>
        )}
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

export default FormikInput;
