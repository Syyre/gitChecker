import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { data: sessionData, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === "unauthenticated") {
      void router.push("/");
    }
  }, [sessionData, status, router]);

  if (status === "loading" || !sessionData) {
    return null;
  }

  return (
    <>
      <div> Dashboard</div>
      <button onClick={() => void signOut({ callbackUrl: "/" })}>
        Sign Out
      </button>
    </>
  );
};

export default Dashboard;
