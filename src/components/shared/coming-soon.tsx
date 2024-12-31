import { PackagePlus } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className=" text-primary-900">
      <div className=" min-h-screen flex  flex-col items-center justify-center gap-2">
        <PackagePlus size={100} />
        <h1 className="text-4xl font-bold leading-tight">Coming Soon 👀</h1>
        <p className="text-center">
          We are almost ready for this exciting features!
        </p>
      </div>
    </div>
  );
}
