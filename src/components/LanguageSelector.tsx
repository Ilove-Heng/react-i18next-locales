import { LANGUAGE_METADATA, SUPPORTED_LANGUAGES, SupportedLanguage } from "@/types/i18n"
import { useNavigate } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

export function LanguageSelector() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const currentPath = window.location.pathname
  
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    const newPath = currentPath.replace(/^\/[^\/]+/, `/${newLang}`)
    i18n.changeLanguage(newLang)
    navigate({ to: newPath })
  }

  return (
    <div className="relative group">
      <div className="flex items-center px-4 py-2 space-x-2 bg-gray-700 rounded hover:bg-gray-600">
        <span>{LANGUAGE_METADATA[i18n.language as SupportedLanguage].flag}</span>
        <span>{LANGUAGE_METADATA[i18n.language as SupportedLanguage].nativeName}</span>
      </div>
      {/* <div className="absolute right-0 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <div
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
          >
            <span className="mr-2">{LANGUAGE_METADATA[lang].flag}</span>
            <span>{LANGUAGE_METADATA[lang].nativeName}</span>
          </div>
        ))}
      </div> */}
    </div>
  )
}