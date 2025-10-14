import dbConnet, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const p = await params
    const serviceCollection = dbConnet(collectionNameObj.serviceCollection);
      const data = await serviceCollection.find({}).toArray();
      return NextResponse.json(data)
}