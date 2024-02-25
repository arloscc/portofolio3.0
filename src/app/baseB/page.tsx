import * as Icon from "react-feather";
import Link from "next/link";

export default function BaseB() {
  return (
    <>
      <div className="h-svh flex items-center justify-center">
        <div className=" ">
          <div className="flex items-center flex-col justify-center ">
            <h1 className="font-semibold items flex justify-center p-12">
              Liat Repo yok
            </h1>
            <Link href="https://github.com/arloscc
            ">
            <Icon.GitHub className="scale-150 hover:opacity-70 duration-300" />

            </Link>
          </div>
          <div className="flex gap-80 justify-center my-60">
            <h1 className="font-semibold">follow sosmed ane :</h1>

            <Link href="https://www.facebook.com/carlos.susanto.50/">
              <Icon.Facebook className="hover:scale-110 duration-300" />
            </Link>

            <Link
              href="https://www.instagram.com/carlossusantoo/"
            >
              <Icon.Instagram className="hover:scale-110 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
