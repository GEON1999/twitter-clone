import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";

export default function SignIn() {
  const router = useRouter();
  const [mutate, { data }] = useMutation("/api/tweet/upload");
  const { register, handleSubmit } = useForm();
  const onValid = (validForm: any) => {
    mutate(validForm);
  };
  useEffect(() => {
    if (data && data?.ok) {
      router.push("/");
    }
  }, [data, router]);
  return (
    <div className="flex flex-col justify-center items-center px-96 py-96">
      <div className="w-full self-center">
        <form onSubmit={handleSubmit(onValid)}>
          <label className="text-gray-500 text-sm" htmlFor={"tweet"}>
            트윗
          </label>

          <div>
            <textarea
              id={"tweet"}
              rows={4}
              {...register("tweet")}
              className="w-full rounded-md border-2 border-gray-300 hover:border-orange-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
            <button className="bg-blue-500 rounded-md w-full py-2  text-white shadow-sm hover:bg-blue-600 outline-none self-center">
              작성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
