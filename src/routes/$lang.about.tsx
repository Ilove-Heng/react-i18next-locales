import PostCard from "@components/compound-component-design-pattern/PostCard";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$lang/about")({
  component: AboutPage,
});

const post = {
  id: 1,
  title: "Hello, World!",
  content: "This is the first post on our new blogs",
  user: {
    id: 1,
    name: "Bro Heng",
  },
};

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold">{t("about.title")}</h1>
      <p className="mt-4">{t("about.description")}</p>
      <PostCard post={post} >
        <PostCard.Title />
        <PostCard.Content/>
        <PostCard.User />
        <PostCard.Button />
      </PostCard>
    </div>
  );
}
