"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Logout from "./Logout";

const AuthLinks = () => {
    const { status ,data} = useSession();
    console.log(data?.user?.image)
  return (
    <>
      {status !== "unauthenticated" ? (
        <>
          <Link className="cursor-pointer" href="/write">
            Write
          </Link>
          <Logout/>
                  <h1 className="font bold ">{data?.user?.name}</h1>
                  <Image className="rounded-full " src={data?.user?.image} alt="" width={50} height={30}/>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
};

export default AuthLinks;
