import { useEffect } from "react";
import { useHistoryHook } from "../helpers";

export default function PageNotFound() {
  useHistoryHook();
  return (
    <main>
      <h2>Page not found</h2>
    </main>
  );
}
