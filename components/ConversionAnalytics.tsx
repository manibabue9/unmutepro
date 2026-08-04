"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackConversion } from "@/lib/analytics";

export default function ConversionAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const label = (link.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
      const shared = { page_path: pathname, link_text: label };

      if (href.includes("wa.me")) trackConversion("whatsapp_click", { ...shared, destination: href });
      else if (href === "/assessment" || href.startsWith("/assessment?")) trackConversion("level_check_cta_click", shared);
      else if (href.includes("#contact")) trackConversion("demo_cta_click", shared);
      else if (href.includes("#institutions")) trackConversion("college_proposal_cta_click", shared);
      else if (href.endsWith(".pdf") || href.includes("/resources/download/")) trackConversion("resource_download", { ...shared, resource_path: href });
      else if (href === "/login") trackConversion("learner_login_click", shared);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}

