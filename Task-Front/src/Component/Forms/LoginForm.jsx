/* eslint-disable no-extra-boolean-cast */
import { useForm } from "react-hook-form";
import FieldSet from "../Field/FieldSet";
import Field from "../Field/Field";
import { baseURL } from "../../Configs/libs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data?.success) {
        setUser(data?.data?.user);
        toast.success(data.message);
        setLoading(false);
        navigate(from, { replace: true });
        localStorage.setItem("accessToken", data?.data?.accessToken);
        localStorage.setItem("email", data?.data?.user?.email);
        localStorage.setItem("role", data.data.user?.role);
        localStorage.setItem("employeeId", data.data?.user.employeeId);
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
      setLoading(false);
    }
    // // const user = { employeeId: "x@example.com", password: "123456789" };

    // const found =
    //   formData.employeeId === user.employeeId && formData.password === user.password;

    // if (!found) {
    //   setError("root.random", {
    //     message: `User with employeeId '${formData.employeeId}' is not found`,
    //     type: "random",
    //   });
    // }
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border bg-gray-200 mt-20"
      >
        <FieldSet label="Enter Login Details">
          <Field label="EmployeeId" error={errors.employeeId}>
            <input
              {...register("employeeId", {
                required: "employeeId is required.",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.employeeId ? "border-red-500" : "border-gray-200"
              }`}
              type="employeeId"
              name="employeeId"
              id="employeeId"
              placeholder="Enter employeeId address"
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
        <div className="text-red-800">{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto mb-4">
            Login
          </button>
        </Field>
        {/* <NavLink to={"/register"}>No Account ? Register !</NavLink> */}
        <span>
          No Account ?{" "}
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive
                ? "active text-[#8d2713] hover:text-gray-600 transition-colors duration-700 ease-in-out "
                : " hover:text-yellow-600 font-bold duration-700 "
            }
            style={{
              fontSize: "16px",
            }}
          >
            Register Please
          </NavLink>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
