// Paolo Bianchessi, 25/10/2023
// This is the page for creating a new post

import Header from "@/components/navbar/";
import { signIn, useSession } from "next-auth/react";
import dynamic from "next/dynamic";

var Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

function New() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  return (
    <>
      <Header session={session} />
      <div className="container mt-3">
        <Editor mode="new" />
      </div>
    </>
  );
}

export default New;
