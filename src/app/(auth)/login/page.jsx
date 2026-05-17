"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const { data:res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className="container mx-auto my-15">
      <h1 className="text-center text-5xl font-bold text-white">
        Log in to continue
      </h1>
      <div className="mx-auto my-10">
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-none border-base-300 rounded-box w-xs md:w-lg border p-4 mx-auto space-y-2">
            <label className="label text-white text-md">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              {...register("email")}
            />

            <label className="label text-white text-md">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              {...register("password")}
            />
            <h1 className="text-white">
              Didn't Registered Yet?{" "}
              <Link
                className=" underline font-semibold cursor-pointer text-[#aaf40c]"
                href={"/register"}
              >
                Register
              </Link>
            </h1>

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
