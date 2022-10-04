import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users");
  const router = useRouter();
  useEffect(() => {
    if (
      data &&
      !data.ok &&
      router.pathname !== `/login` &&
      router.pathname !== `/sign-in`
    ) {
      router.replace("/login");
    } else if (
      (data && data?.ok && router.pathname === `/login`) ||
      (data && data?.ok && router.pathname === `/sign-in`)
    ) {
      router.replace("/");
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
