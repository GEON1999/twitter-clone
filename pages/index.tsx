import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

export default function Home() {
  const router = useRouter();
  const { data } = useSWR("/api/tweet");
  console.log(data);
  return (
    <div className="flex justify-center items-center flex-col">
      <button
        className="mb-10 bg-blue-500 rounded-md w-96 py-2 mt-10 text-white shadow-sm hover:bg-blue-600 outline-none self-center"
        onClick={() => router.push("/upload")}
      >
        업로드
      </button>

      {data?.tweets?.map((tweet: any) => (
        <div key={tweet?.id}>
          <Link href={`/${tweet?.id}`}>
            <a>
              <div className="flex flex-col items-start my-5 mr-96">
                <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-sm  mb-2">
                  New 피드
                </span>
                <span>{tweet?.tweet}</span>
                <div className="my-4 flex justify-between w-full text-gray-500 text-sm">
                  <span>{tweet?.user?.name}</span>
                </div>
              </div>
              <div className="flex space-x-3 border-t border-b-[2px] w-full py-2 text-sm text-gray-700">
                <button>
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>좋아요 {tweet?._count?.like}</span>
                  </span>
                </button>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
