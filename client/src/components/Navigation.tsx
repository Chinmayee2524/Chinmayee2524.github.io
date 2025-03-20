export default function Navigation() {
  return (
    <nav className="flex justify-center p-4 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-xl text-primary">CB Portfolio</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-primary transition-colors duration-200">Home</a>
          <a href="/about.html" className="hover:text-primary transition-colors duration-200">About</a>
          <a href="/projects.html" className="hover:text-primary transition-colors duration-200">Projects</a>
          <a href="/blog.html" className="hover:text-primary transition-colors duration-200">Blog</a>
          <a href="/contact.html" className="hover:text-primary transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}