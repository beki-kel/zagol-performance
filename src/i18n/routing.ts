import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "am"],

  // Used when no locale matches
  defaultLocale: "en",
});
