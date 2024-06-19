import React from "react";
import { useParams } from "react-router-dom";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_POSTS } from "data/posts";
import Card11 from "components/Card11/Card11";

const PageCategory: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = DEMO_CATEGORIES.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return <div>Catégorie non trouvée</div>;
  }

  const posts = DEMO_POSTS.filter((post) =>
    post.categories.some((cat) => cat.slug === categorySlug)
  );

  return (
    <div className="container">
      <h1 className="text-2xl font-semibold">{category.name}</h1>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:mt-10">
        {posts.map((post) => (
          <Card11 key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PageCategory;
