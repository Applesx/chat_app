import Image from "next/image";
import {Button} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { stat } from "fs";

const state = true;
export default function Home() {
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold text-indigo-500">
        Hello Discord Clone
      </p>
      <Button className={cn(
        "bg-indigo-500",
        state && "bg-red-600"
      )} variant="destructive" >Click me</Button>
    </div>
  );
}
