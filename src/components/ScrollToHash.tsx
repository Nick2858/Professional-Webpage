import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname, search } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });

    window.history.replaceState(null, "", pathname + search);
  }, [hash, pathname, search]);

  return null;
}
