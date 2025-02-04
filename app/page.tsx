import SlowComponent from "@/components/slow-component";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className=" flex flex-col w-full justify-center font-[family-name:var(--font-geist-sans)]">
      <h1>Hello world!</h1>
      <Suspense fallback={"Loading..."}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
