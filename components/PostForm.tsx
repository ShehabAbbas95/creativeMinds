import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

// import { useSession } from "next-auth/react";
import { mutate } from "swr";
import { useRouter } from "next/router";
import Form from "./Form";

const PostForm = () => {
  const router = useRouter();
  const [status, setStatus] = useState<
    | "ready"
    | "submitting"
    | "saved"
    | "conflictError"
    | "badDomainError"
    | "error"
  >("ready");
  //   const { data: session } = useSession();

  const onSuccess = () => {
    // @TODO: Add filter parameter once we got it
    router.push("/dashboard");
  };

  const onSubmit = async (data) => {
    setStatus("submitting");
    const response = await fetch(
      `/api/reseller/${session?.token.id}/websites`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([data]),
      }
    );

    if (!response.ok) {
      if (response.status === 409) {
        setStatus("conflictError");
      } else if (response.status === 400) {
        setStatus("badDomainError");
      } else {
        setStatus("error");
      }

      return;
    }

    // setTimeout(() => {
    //   setStatus("saved");
    //   form.reset();
    // }, 700);
  };

  const addNewWebsiteHandler = () => {
    setStatus("ready");
  };
  return (
    <section className="bg-white p-10">
      <h1>Add New Post</h1>
      <Form />
    </section>
  );
};
export default PostForm;
