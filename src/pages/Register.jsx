import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
  };

  // For confirm password validation
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">Register</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          className="mt-1 w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
      >
        Register
      </button>
      Registered? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">login</Link>
    </form>
  );
};

export default Register;
