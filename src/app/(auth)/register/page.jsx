"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const { data:res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.image,
    });
    if(res) {
      toast.success("You have Registered Successfully");
      router.push('/login');
    } else {
      toast.warning(error.message);
    }
  };

  return (
    <div className="container mx-auto my-15">
      <h1 className="text-center text-5xl font-bold text-white">
        Register Your Account
      </h1>
      <div className="mx-auto my-10">
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-none border-base-300 rounded-box w-xs md:w-lg border p-4 mx-auto space-y-2">
            <label className="label text-white text-md">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
              {...register("name")}
            />
            <label className="label text-white text-md">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              {...register("email")}
            />
            <label className="label text-white text-md">Image</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Your Image URL"
              {...register("image")}
            />

            <label className="label text-white text-md">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              {...register("password")}
            />
            <h1 className="text-white">
              Already Have an account?
              <Link
                className=" underline font-semibold cursor-pointer text-[#aaf40c]"
                href={"/login"}
              >
                Login
              </Link>
            </h1>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
