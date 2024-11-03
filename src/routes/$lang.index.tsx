import { nodes } from "@/api/folder/folderStructure";
import { useLanguageGuard } from "@/hooks/useLanguageGuard";
import FilesystemItem from "@components/recursive-component/RecursiveFolderList";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

type Node = {
  name: string;
  nodes?: Node[];
};

export const Route = createFileRoute("/$lang/")({
  component: HomePage,
});

function HomePage(): JSX.Element {
  const { t } = useTranslation();
  const lang = useLanguageGuard();

  return (
    <div>
      <h1 className="text-3xl font-bold">{t("home.title")}</h1>
      <p className="mt-4">{t("home.description")} {lang === "en" ? "Welcome" : "សូមស្វាគមន៍"}</p>
      <div className="mt-10 recursive-folder-classes">
      <h1 className="mb-4 text-3xl font-bold text-black">{t("folder.title")}</h1>
        <ul>
          {nodes.map((node) => (
            <FilesystemItem node={node} key={node.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

