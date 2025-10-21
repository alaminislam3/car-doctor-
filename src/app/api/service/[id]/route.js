import dbConnet, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // ✅ important!

export const GET = async (req, { params }) => {
  try {
    const { id } = params; // ✅ get the id
    const serviceCollection = dbConnet(collectionNameObj.serviceCollection);

    // ✅ find one by ObjectId
    const service = await serviceCollection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};





// import dbConnet, { collectionNameObj } from "@/app/lib/dbConnect";
// import { NextResponse } from "next/server";

// export const GET = async (req, { params }) => {
//   const p = await params;
//   const serviceCollection = dbConnet(collectionNameObj.serviceCollection);
//   const data = await serviceCollection.find({}).toArray();
//   return NextResponse.json(data);
// };
