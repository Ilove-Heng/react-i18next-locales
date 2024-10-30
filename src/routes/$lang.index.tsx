import { useLanguageGuard } from "@/hooks/useLanguageGuard";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$lang/")({
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();
  const lang = useLanguageGuard();

  return (
    <div>
      <h1 className="text-3xl font-bold">{t("home.title")}</h1>
      <p className="mt-4">{t("home.description")}</p>
      <h1>{lang === "en" ? "Welcome" : "Benvenuto"}</h1>
    </div>
  );
}
