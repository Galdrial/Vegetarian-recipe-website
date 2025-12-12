
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';



import { useFetchRecipes } from './hooks/useFetchRecipes';

interface RecipeDetail {
  id: string;
  title: string;
  src: string;
  instructions?: string;
}


const RecipeDetail: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const [recipe, setRecipe] = React.useState<RecipeDetail | null>(null);
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = id ? `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}` : '';

  type SpoonacularDetailResult = {
    id: number;
    title: string;
    image: string;
    instructions?: string;
  };
  type RecipeCard = { id: string; title: string; src: string; instructions?: string };
  const mapFn = (data: SpoonacularDetailResult): RecipeCard[] => data && data.id ? [{
    id: String(data.id),
    title: data.title,
    src: data.image,
    instructions: data.instructions,
  }] : [];
  const { data, loading, error, fetchData } = useFetchRecipes<SpoonacularDetailResult, RecipeCard[]>(url, mapFn);

  React.useEffect(() => {
    if (id) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  React.useEffect(() => {
    if (data && data.length > 0) {
      setRecipe(data[0]);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return null;
  if (!recipe.instructions || recipe.instructions.trim() === "") {
    return <div>Instructions not available for this recipe.</div>;
  }

  const backTo = location.state?.from === 'search' ? '/search' : '/';
  return (
    <CardDetail
      key={recipe.id}
      src={recipe.src}
      alt={recipe.title}
      title={recipe.title}
      instructions={recipe.instructions}
      backTo={backTo}
    />
  );
};

export default RecipeDetail;