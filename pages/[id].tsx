import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import useMutation from "../lib/useMutation";

interface ItemDetailResponse {
  ok: boolean;
  tweet: any;
  isLiked: boolean;
}

export default function Tweet() {
  const router = useRouter();
  const [toggoleLike] = useMutation(`/api/tweet/${router.query.id}/like`);
  const { data, mutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/tweet/${router.query.id}` : ""
  );
  console.log(data);
  const onClicked = () => {
    if (!data) return;
    mutate({
      ...data,
      tweet: {
        ...data.tweet,
        _count: {
          ...data.tweet._count,
          like: data.isLiked
            ? data.tweet._count.like - 1
            : data.tweet._count.like + 1,
        },
      },
    });
    toggoleLike({});
  };
  return (
    <div className="flex justify-center items-center flex-col py-32">
      <div className="flex flex-col items-start my-5 w-full px-32">
        <div className="my-4 flex justify-between w-full text-gray-500 text-sm">
          <span>{data?.tweet?.user?.name}</span>
        </div>
        <span className="my-10">{data?.tweet?.tweet}</span>

        <div className="flex space-x-3 border-t border-b-[2px] w-full py-2 text-sm text-gray-700">
          <button onClick={onClicked}>
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
              <span>좋아요 {data?.tweet?._count?.like}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
