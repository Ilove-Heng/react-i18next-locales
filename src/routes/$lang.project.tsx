import DarkModeToggle from "@components/shared/DarkModeToggle";
import Counter from "@components/shared/Counter";
import UserForm from "@components/shared/UserForm";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import CountProvider, { useCountStore } from "@/store/CountProvder";

type RowList = {
  initialCount: number;
};

export const Route = createFileRoute("/$lang/project")({
  component: ProjectPage,
});

function ProjectPage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">{t("project.title")}</h1>
      <p className="mt-4">{t("project.description")}</p>
      <Counter/>
      <UserForm />
      <DarkModeToggle/>
      <RowList initialCount={0}/>
    </div>
  );
}


export function RowList({ initialCount }: RowList): JSX.Element {
  return (
    <CountProvider initialCount={initialCount}>
      <Component />
      <AnotherComponent/>
    </CountProvider>
  );
}

function Component(): JSX.Element {
  const count = useCountStore((state) => state.count);
  const inc = useCountStore((state) => state.inc);
  return (
    <div className="flex items-center gap-4 mt-4">
      <button  
      onClick={inc}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Increase</button>
      <div>{count}</div>
    </div>
  );
}


function AnotherComponent(): JSX.Element {
  const count = useCountStore((state) => state.count);
  return (
    <div className="flex items-center gap-4 mt-4">
      <button  
      className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-blue-700">{count}</button>
    </div>
  );
}