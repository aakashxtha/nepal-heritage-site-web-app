import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg text-center space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-foreground/70">The page you are looking for does not exist.</p>
      <Link href="/" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90">Go Home</Link>
    </div>
  );
}


