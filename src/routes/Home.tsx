import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const Home = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/comments');
  useEffect(()=>{
    if(data){
      console.log(data)
    }
  },[data])

  if (loading) return <p>Loading...</p>;
  if (error) throw error;


  return (
    <div className="flex w-[100vw] flex-col h-[100vh] text-[20px] items-center justify-center">
      data completed
    </div>
  );
};
