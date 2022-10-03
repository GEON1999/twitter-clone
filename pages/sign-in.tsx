import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";

export default function SignIn() {
  const [mutate] = useMutation("/api/users/signIn");
  const { register, handleSubmit } = useForm();
  const onValid = (validForm: any) => {
    mutate(validForm);
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-center font-bold text-xl pt-24">회원가입</h1>
        <div className="w-[500px] h-96 bg-slate-300 mt-10 rounded-xl flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onValid)}
            className="flex flex-col h-full w-full justify-around"
          >
            <div className="px-20">
              <label className="text-sm " htmlFor={"name"}>
                name
              </label>
              <input
                className="border-gray-300 shadow-sm w-full border placeholder:text-gray-500 placeholder:text-sm rounded-md  px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                {...register("name", { required: true })}
                type="text"
                id="name"
              />
            </div>
            <div className="px-20">
              <label className="text-sm " htmlFor={"name"}>
                email
              </label>
              <input
                className="border-gray-300 shadow-sm w-full border placeholder:text-gray-500 placeholder:text-sm rounded-md  px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                {...register("email", { required: true })}
                type="email"
                id="email"
              />
            </div>
            <div className="px-20">
              <label className="text-sm " htmlFor={"name"}>
                password
              </label>
              <input
                className="border-gray-300 shadow-sm w-full border placeholder:text-gray-500 placeholder:text-sm rounded-md  px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                {...register("password", { required: true })}
                type="password"
                id="password"
              />
            </div>
            <button className="bg-blue-500 rounded-md w-3/5 py-2  text-white shadow-sm hover:bg-blue-600 outline-none self-center">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
