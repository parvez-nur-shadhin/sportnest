"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
    });
    console.log(res, error);
    if (res) {
      toast.success("You have logged in successfully!");
      router.push("/");
    } else {
      toast.warning(error.message);
    }
  };
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const validatePassword = (value) => {
    const hasUpperCaseLetter = /[A-Z]/.test(value);
    const hasLowerCaseLetter = /[a-z]/.test(value);

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (!hasUpperCaseLetter) {
      return "Password must contain at least 1 uppercase letter";
    }
    if (!hasLowerCaseLetter) {
      return "Password must contain at least 1 lowercase letter";
    }

    return true;
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
              {...register("password", {
                validate: validatePassword,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <h1 className="text-white">
              Didn't Registered Yet?{" "}
              <Link
                className=" underline font-semibold cursor-pointer text-[#aaf40c]"
                href={"/register"}
              >
                Register
              </Link>
            </h1>

            <button className="btn bg-[#aaf40c] text-black mt-4">Login</button>

            <h1 className="text-lg text-white my-2 font-semibold text-center">
              OR,
            </h1>

            <button
              onClick={signIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
