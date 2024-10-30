import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$lang/project")({
  component: ProjectPage,
});

function ProjectPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-3xl font-bold">{t("project.title")}</h1>
      <p className="mt-4">{t("project.description")}</p>
    </div>
  );
}
