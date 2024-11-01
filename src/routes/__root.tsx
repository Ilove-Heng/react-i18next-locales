import { SUPPORTED_LANGUAGES, SupportedLanguage } from "@/types/i18n";
import { LanguageSelector } from "@components/LanguageSelector";
import {
  Outlet,
  createRootRoute,
  Link,
  useNavigate,
  useLocation,
  redirect,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RowList } from "./$lang.index";
import CountProvider, { useCountStore } from "@/store/CountProvder";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: async ({ location }) => {
    if (location.pathname === "/") {
      const savedLang = localStorage.getItem("language");
      const browserLang = navigator.language.split("-")[0];
      const defaultLang = SUPPORTED_LANGUAGES.includes(
        savedLang as SupportedLanguage
      )
        ? String(savedLang)
        : SUPPORTED_LANGUAGES.includes(browserLang as SupportedLanguage)
          ? browserLang
          : "en"; // Fallback to 'en' if no valid language is found

      // Store the default language in local storage
      localStorage.setItem("language", defaultLang);

      throw redirect({
        to: "/$lang",
        params: { lang: defaultLang },
      });
    }
  },
});

function RootComponent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract language from URL path
  const getCurrentLanguageFromPath = () => {
    const pathSegments = location.pathname.split("/");
    return pathSegments[1] || "en"; // Default to 'en' if no language segment
  };

  useEffect(() => {
    const urlLang = getCurrentLanguageFromPath();
    // Validate if the URL language is supported
    if (SUPPORTED_LANGUAGES.includes(urlLang as SupportedLanguage)) {
      // Update i18n language
      i18n.changeLanguage(urlLang);
      // Update localStorage
      localStorage.setItem("language", urlLang);
      // Update HTML lang attribute
      document.documentElement.lang = urlLang;
    } else {
      // If URL has unsupported language, redirect to English
      const currentPath = location.pathname.split("/").slice(2).join("/");
      navigate({
        to: `/en/${currentPath}`,
      });
    }

    // Retrieve the language from local storage on component mount
    const savedLang = localStorage.getItem("language");
    if (
      savedLang &&
      SUPPORTED_LANGUAGES.includes(savedLang as SupportedLanguage)
    ) {
      i18n.changeLanguage(savedLang);
    }
  }, [location.pathname, i18n, navigate]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "km" : "en";
    // Update locales
    i18n.changeLanguage(newLang);
    // Update localstorage
    localStorage.setItem("language", newLang);
    // Update HTML lang attribute
    document.documentElement.lang = newLang;
    // Extract the current path without the language segment
    const currentPath = location.pathname.split("/").slice(2).join("/");

    // Navigate to the new URL with the updated language
    navigate({
      to: `/${newLang}/${currentPath}`,
    });
  };

  const validateLanguage = (lang: string) => {
    const supportedLanguages = ["en", "km"]; // Add other supported languages here
    return supportedLanguages.includes(lang) ? lang : "en"; // Default to 'en' if invalid
  };

  const currentLang = validateLanguage(getCurrentLanguageFromPath());

  return (
    <div className="min-h-screen">
      <nav className="p-4 text-white bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
          <div className="space-x-4">
            <Link
              to={`/${currentLang}`}
              params={{ lang: currentLang }}
              activeOptions={{ exact: true }}
              className="[&.active]:text-green-500 hover:text-gray-300"
            >
              {t("navigation.home")}
            </Link>

            <Link
              to={`/${currentLang}/project`}
              params={{ lang: currentLang }}
              className="[&.active]:text-green-500 hover:text-gray-300"
            >
              {t("navigation.project")}
            </Link>

            <Link
              to={`/${currentLang}/about`}
              params={{ lang: currentLang }}
              className="[&.active]:text-green-500 hover:text-gray-300"
            >
              {t("navigation.about")}
            </Link>
          </div>
          <div>
            hi
          </div>

          <button onClick={toggleLanguage}>
            <LanguageSelector></LanguageSelector>
          </button>
        </div>
      </nav>
      <main className="container p-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
