"use client";
import { Button, Image, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="bg-Grey-900 h-screen py-32">
      <section className="sm:max-w-md max-w-sm mx-auto sm:p-8 p-6 rounded-xl bg-Grey-800">
        <div className="flex flex-col w-full justify-center items-center gap-6">
          <div>
            <Image
              src={"/images/chatjane.jpg"}
              alt="Avatar"
              width={80}
              height={80}
              radius="full"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="text-2xl text-white font-medium">
              Apiwat Supaphol
            </div>
            <div className="font-semibold text-Green">Bangkok, Thailand</div>
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="text-white">"Front-end developer"</div>
            <div className="grid grid-cols-1 w-full gap-4">
              <Button
                size="lg"
                as={Link}
                href="https://github.com/Janeninie"
                isExternal
                className="bg-Grey-700 text-white hover:bg-Green hover:text-inherit"
              >
                Github
              </Button>
              <Button
                size="lg"
                as={Link}
                href="https://www.linkedin.com/in/apiwat-supaphol-3b0953324/"
                isExternal
                className="bg-Grey-700 text-white hover:bg-Green hover:text-inherit"
              >
                LinkedIn
              </Button>

              <Button
                size="lg"
                as={Link}
                href="https://www.instagram.com/apiw.jane/"
                isExternal
                className="bg-Grey-700 text-white hover:bg-Green hover:text-inherit"
              >
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
