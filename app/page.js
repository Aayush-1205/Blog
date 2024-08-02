'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const blog = true;
  const router = useRouter();

  useEffect(() => {
    if (blog) {
      router.push("/blogs");
    }
  }, [blog, router]);
  return <div></div>;
}
