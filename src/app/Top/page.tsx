import Image from "next/image";
export default function Top() {
  return (
    <>
      <div className=" h-svh flex flex-col justify-center ">
        <div className="flex  justify-center items-center gap-80">
          <div className="text-4xl">
            <h1 className="font-semibold">Carlos Susanto</h1>
            <h2 className="text-sm font-medium">Front End Developer.</h2>
          </div>
          <div>
            <Image
              className="w-40 rounded-full"
              src="/profile.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>


    <div className="flex justify-center my-12 text-sm font-light hover:text-base duration-300 hover:font-semibold">
      <a href="#Jujur">let&apos;s  scroll down..</a> 
    </div>
      </div>
    </>
  );
}
