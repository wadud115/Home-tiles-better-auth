import Link from "next/link";



export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <span className="font-serif text-9xl font-bold text-primary/10">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Page Not Found
          </span>
        </div>
      </div>

      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        
        
        
          <button className="btn "> <Link href={'/'}>Go Home</Link></button>
         
        
        <Link href="/All-tiles">
          <button className="btn">
            
            Browse Tiles
          </button>
        </Link>
      </div>
    </div>
  );
}
