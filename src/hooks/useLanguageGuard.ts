import { useEffect } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "../types/i18n";

export function useLanguageGuard() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // Get params from the current route
  const params = useParams({ from: "/$lang/" }); // Error
  const lang = params.lang as string;

  useEffect(() => {
    // Check if language is supported
    if (!SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)) {
      // Redirect to default language
      const defaultLang = SUPPORTED_LANGUAGES[0]; // Use the first supported language as default
      const currentPathname = window.location.pathname;
      const newPath = currentPathname.replace(/^\/[^\/]+/, `/${defaultLang}`);
      console.log('newPath',newPath);
      
      navigate({ to: newPath });
      return;
    }

    // Sync i18n language with route
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang as SupportedLanguage);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, [lang, navigate, i18n]);

  return lang as SupportedLanguage;
}
