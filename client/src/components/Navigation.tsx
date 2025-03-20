import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="flex justify-center p-4 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-xl text-primary">CB Portfolio</a>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <a className="hover:text-primary transition-colors duration-200">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-primary transition-colors duration-200">About</a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-primary transition-colors duration-200">Projects</a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-primary transition-colors duration-200">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-primary transition-colors duration-200">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}