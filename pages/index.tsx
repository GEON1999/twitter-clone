import Image from "next/image";
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
      <div className="flex mt-2 mr-96">
        <Image
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8dofIAnfITn/L5/f/p9v7y+v4QofLK6Py94vvu+P4hpfOAx/fb8P1FsPTR6/zX7v0ao/KRz/hRtPVcuPUzqvNmvfbE5fvi8/2q2vqIy/g3q/N1w/eb0/mx3fpTtfWj1/puv/Z5gzF1AAAIsUlEQVR4nO2d6ZaqOhBGu1OMMs8IiPj+L3kBu21ERJJUIOeu7F/nrNViPhOqKlUZvr4UCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCSvTgXN3SJEmu6c2Nbe90dINQORVV4pAeGCHQ/8vxq6I8umE4GIVbm72272cGoU7a6kc3jxu98825uIlKyNxwy2Osi+iGMqJXDnmr70dl1HzU6N1Iu0dzqTG67JO+QSKJmtWxWlYRqaU0TFbyWd7PYK3fd1EZZ/1grmi/3ONq+ia06v37tyAyX+7GoHFgGMm0DQ6dgl/Ch6/wNwzQCaS2Xp5htFcYn0Ia2q9viCO4F+2MSt/Qi1H39ASjqOpfFwMB5dd7EZBE6KvbRbQCh7cxfnzesFz/+/EIoO5ClwwDX0PV9ERFN0IfEt2xTWXb1E8BgkMb++jOOLZdAdLuDL8gE6QJ28Y3yfPngdrbd/ffR5jEmFXg8DL26mb9T64GZQO0XzdFqJ3MJs4sI3QFeqMYPvyUEIkWg5FZAYA+Xpv8xiT+/OeUlD5uFwJDE5vJa4LfizmuQBZjYdS8T1gD+SUkLD4tfA4XSYPpF3UHV2D61Liy2+QY7ZktJzmtMV6B2RMuAtOmGfZtFte9o5o3gqRoAVyAaUf7KdNDoBbEPmyNv9OXRpB6UyJhAzfELoTo/PNUw6p8E/pQeuNgW7DmgDSZCmhmhB/0gT/Opk7BuQ9Sxx/O2dgPWr30POf8+ZOfadC6EJxKNzw7zrNHkLo5U3Nyln7n37CeCx3vLXTSJs36kTkJTjZ7bn1RYf8En3tOfME0pPCcYIXtfvudwm+S8Sbsrsgh91Qghed/q7Cn4vKMJZ6dmUN8Coe2orC3X7T5kCmdMIGQ0UzyjbUUEZgxezcix9yTVjl0P/ySt/h7GKSs3n9t+PMJzF7zjKt8SERDFLMFcYEpSCBlD/aD6YNNB2Azqq2YLoSMelBtyBORnMHicOSf1prC4Kbns6fF50YudXkWL2SbNiRhKBOHW9wWgEP7Or7OWbgBcmMx7caqMZ083bnQaNR8dIHfJmPhd+twApJdto+RVT/LBHFsNoE0Rg+yaqtGfHfoM8/LPYq2AETNNn+LrtDkiCCpbAIQSM4bloRIpZDWNw9LQqxPs5cT9nvIo3B5mr8u0vTj9dcC3dKYlNHoEyxZTSBmcgnf9+Ri/ucwhR5bQqUX6VfFOyeJ7fGBK//XsLYGwKxvXbCk0pVplH6FPIaPwHeWd8HcvnbIcSmfwq+Y8wcHQqI6j+1Qf7yZNo6wBxFPRqW3fFsXZL0HBpmmU6dN3LW25Vm4ZScubzEQvKz3ZGPU2b+dZoQsECLeYgrvOH1pEfbzqBfRzNFSIXNyNCDjLmt62dEi1vH5Cyk29sBCBa4I1fdWZomQs8ryJsO7E1dp4Iai2DTj4p//NLa465cwIcyL8zsCdfeIuApRqXhugLkq3ZIhx5P/7uQIkRdp4cGahhoVDqmJLL/YZW+uDPdoKcuwB23Bj6PvRZpOcnMv55ugkgoX4DBvFyonxmXYegSSugyfOaRBzzaIgd0dCqkvCIDdHYqqgmFDOnaFxT/Rh4Rj/ltK6+QncJjSr3/jRYSEQ+DX5R9QyLc4W9SiCUz4toxqAtefYUG93/CZs/z+gjOFgV4IQ4d+R+WMl8XsssGwE+gZYUvQkAD+Ha6SdyIk3Hk2Xe5cKcturjmCltlhwVdYG9E+rVA8lBpjn5LM8TfP3HCCLW82mCAdhyBtAA4Z0n5BDXMbFiZIg/QLpdItBM4lClN0X8ZeBPY84oJEGevAGO7+j5N8bpF/hcIzWiVbypsnFbyMbFVSYK45vSVImI5aEQVKxDZDix15hqqAcywGPDeSRCNfJniNsImkGKt48cwrXuWQw0Viu4oZhn1z4FiR3Dm2j5yKSsDmns0AYkj6i2GV+o951gzds+PbkRkcgu7th5o3cfzkmvb4tWMeXNXnXTS7SNy/ePeDYWF+xtbuiOjCjbsR9wGEdOHnbcH7QX924DYKaaqJ3Mue36DJUvSmPztwK8XR0u6gJi9m3KToRII/L3xQyrCMVoyn+EXcoSSbQagYriHB1gtxZuaOd3RhX6SZuVMcG9mAKfxoatxDrKgReODvH0LO7diI+DE6oDFvnOUXGOHPexcl4h5bSaNQTAJxAfeYHI3Qg8VnHJLgh2zPW0qsAzbQbD3REolTs3M3goly6CYNbb3r20h/Mwc/p8rcL9/GdNQzP6G712oioDnwERWvqvdI78POVuYJw24y8noLFa5AU+C0fpNIK74OWXBRFanDBY7o1jlumlsiRODufuI9rYhqDftOZnSMRsTrKOj2EBYsIUvDBC1IYEBjudZog0BpetBKhTgMaQSWYuJw2G/Ku45xcYTM+v/uPDgWrfXFRDSQyeDoe32JoIgN4fh+BDSb8ma/zQBgXvnCin6+ioq4wYwPmQ9O0Sw3EzajkMDGeBcfxGVNoRaz1mIrRhAnQtcnwvqFsWLRStv1F65dRoTg3GTDwinomkT0ImEgV/FOoiyssDxpd1umGXoZWu3FTX2HiM5WDB3Y7WFDw9yMsqz2r2ni15njmHC/61ysuO/RCe51h/rdkY+i9luDCGTlvmZ0jHjvFesAUbVvTtRrzD2z9mA2+4ehVm7uVQoFSPep7r5qFBi4TPVd7cOi0CD/FjxWh9P4j9M3amyEOnmI8mP1DYxRtphZPGTVgSWXCUaRCzCsw2URR9XMFihjH/UQZwKfrlDYn+EKU6Sibz86m0KCJMUrmlUNrySPyuGIydq1JRqdc7TgkmaMsWr/MeL4riVl7z1hBJc8Mwf7ulXouNPGzNK4OHD2TskpaKu8dkwC6zugYByXUZZW58W7LiRHK4vOzf2sFzrMIO+zyB/G/443IridHco/MFfRdC9oL3HlNrc0vV7H/W15U13aIvD+wX5TKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBT/b/4DA9iR2HeVAZUAAAAASUVORK5CYII="
          }
          alt="twetter"
          width={80}
          height={80}
        />
      </div>
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
