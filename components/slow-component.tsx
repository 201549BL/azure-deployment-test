import { connection } from "next/server";
import React from "react";

const SlowComponent = async () => {
  await connection();

  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  return <div>SlowComponent rendered after 2 seconds</div>;
};

export default SlowComponent;
