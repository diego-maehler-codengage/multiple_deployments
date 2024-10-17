import Head from "next/head";
import Image from "next/image";

export const Days = (props: { dayCount: number; logo: any }) => {
  const day = Math.floor(props.dayCount);

  return (
    <>
      <Head>
        <title>Day {Math.floor(day)} | Ellipsis</title>
        <meta name="description" content={`Day ${day} | Ellipsis`} />
      </Head>
      <div className="flex flex-col gap-6 items-center justify-center w-full h-screen">
        <Image src={props.logo} alt="Ellipsis logo" width={120} />
        <div className="flex gap-2 text-5xl font-semibold items-center">
          <h2>Day</h2>
          <h2 className="px-4 py-2 ellipsis-bg-color">{day}</h2>
        </div>
        <span className="text-xl font-extrabold">
          {props.dayCount.toFixed(6)}
        </span>
      </div>
    </>
  );
};
