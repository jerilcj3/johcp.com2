import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "NONE" } };
}

export default function Home({ token }) {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className="">
      <h1>{token}</h1>
      <p>{currentPath}</p>
      <img src={`http://localhost:3000/api/pixel?token=${token}&path=${currentPath}`} alt="" />
    </div>
  );
}
