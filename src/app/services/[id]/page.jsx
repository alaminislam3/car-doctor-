import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function ServiceDetailsPage({ params }) {
  const p =  await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  // console.log(data);
  return (
    <div className="container mx-auto">
      <section className="flex justify-center">
        <figure className="relative">
          <Image src={data?.img} width={1100} height={300} alt="banner" />
          <div className="transparent-layer overlay-bg absolute border-2 border-red-400 top-0">
            <div className=" font-bold text-2xl flex items-center ps-16">
              <div>
                <h1 className="text-black">{data?.title}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="container mx-auto grid grid-cols-12 gap-4 mt-4">
        {/* Left Side */}
        <div className="col-span-9 space-y-4">
          <Image
            // className="w-full"
            src={data?.img}
            width={400}
            height={280}
            alt="new image"
          />
          <h1 className="font-bold text-3xl">{data?.title}</h1>
          <p className="text-justify">{data?.description}</p>
        </div>
        {/* Right Side */}
        <div className="flex flex-col space-y-4">
          <Link href={`/checkout/${data._id}`}>
            <button type="btn" className="text-white px-2 py-2 bg-orange-500">
              Checkout
            </button>
          </Link>
          <p className="text-center text-xl font-bold">
            Price: $ {data?.price}
          </p>
        </div>
      </section>
    </div>
  );
}
