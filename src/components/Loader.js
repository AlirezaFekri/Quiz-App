import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    document.title = "loading..."

    return () => document.title = "Start Your Quiz"
  }, [])
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
