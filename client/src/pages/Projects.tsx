import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = "/projects.html";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Projects Page...</h1>
        <p>Please wait while we redirect you to the projects page.</p>
      </div>
    </div>
  );
}