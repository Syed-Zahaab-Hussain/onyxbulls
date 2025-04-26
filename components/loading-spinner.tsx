import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({ color = "primary" }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/70 z-10">
      <LoaderCircle className={`animate-spin w-12 h-12 text-${color}`} />
    </div>
  );
}
