import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Portfolio...</h1>
        <p>Please wait while we redirect you to the portfolio.</p>
      </div>
    </div>
  );
}