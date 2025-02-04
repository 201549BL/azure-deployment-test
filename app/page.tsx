import { connection } from "next/server";

async function getServerSideNumber() {
  "use server";
  return Math.floor(Math.random() * 101);
}

export default async function Home() {
  await connection();

  const number = getServerSideNumber();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">Random number: {number}</h1>
    </div>
  );
}
