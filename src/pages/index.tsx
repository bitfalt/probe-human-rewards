
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in page
    router.push("/sign-in");
  }, [router]);

  return null;
}
