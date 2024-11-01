import { useLanguageGuard } from "@/hooks/useLanguageGuard";
import CountProvider, { useCountStore } from "@/store/CountProvder";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

type RowList = {
  initialCount: number;
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
      <p className="mt-4">{t("home.description")}</p>
      <h1>{lang === "en" ? "Welcome" : "សូមស្វាគមន៍"}</h1>
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