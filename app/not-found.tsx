import Navbar from "@/components/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-4">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium transition-colors hover:bg-primary/90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}
