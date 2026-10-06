// Only the root page uses automatic selection. Explicit /en/ and /ja/ URLs stay put.
(() => {
  let preference;
  try {
    preference = localStorage.getItem("portfolio-language");
  } catch {
    // Language selection still works when browser storage is unavailable.
  }
  const primaryLanguage = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
  const language = ["en", "ja"].includes(preference)
    ? preference
    : primaryLanguage.startsWith("ja") ? "ja" : "en";
  location.replace(`/${language}/${location.search}${location.hash}`);
})();
