/* eslint-disable no-extra-boolean-cast */

import { useForm } from "react-hook-form";
import FieldSet from "../Field/FieldSet";
import Field from "../Field/Field";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { baseURL } from "../../Configs/libs";
import { useState } from "react";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // const { fields, append, remove } = useFieldArray({
  //   name: "socials",
  //   control,
  // });

  const submitForm = async (formData) => {
    console.log(formData);
    try {
      const response = await fetch(`${baseURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data?.success) {
        toast.success(data.message);
        setLoading(false);
        navigate("/sign-in");
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      toast(error?.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border mt-14 bg-slate-300"
      >
        <FieldSet label="Enter Your Basic Details">
          <Field label="Employee ID" error={errors.employeeId}>
            <input
              {...register("employeeId", {
                required: "Full Name is required.",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.employeeId ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              name="employeeId"
              id="employeeId"
              placeholder="Enter Full Name"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required.",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Your password must be at least 8 characters.",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.password ? "border-red-500" : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </Field>
        </FieldSet>

        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
