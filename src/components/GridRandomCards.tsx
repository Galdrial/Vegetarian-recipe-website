import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardSelector, setRandomCards } from '../redux/RandomCardsSlice';
import Card from './Card';

function GridRandomCards() {
  const cards = useSelector(cardSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (cards.length === 0) {
      async function fetchRandomCards() {
        try {
          const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
          const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&include-tags=vegetarian`);
          interface SpoonacularRecipe {
            id: number;
            title: string;
            image: string;
            instructions?: string;
          }
          const cards = response.data.recipes.map((item: SpoonacularRecipe) => ({
            id: String(item.id),
            title: item.title,
            src: item.image,
            alt: item.title,
            instructions: item.instructions,
          }));
          dispatch(setRandomCards(cards));
          console.log('Fetched random cards:', response.data);
        } catch (error) {
          console.error('Error fetching random cards:', error);
        }
      }
      fetchRandomCards();
    }
  }, [dispatch, cards.length]);

  return (
    <>
    <h2 className='font-playwrite text-lime-700 text-4xl font-bold text-center mt-12'>Random Recipes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1300px] mx-auto px-8 sm:px-20 pt-16 pb-24">
      {cards.map((cardData, index) => (
        <Card
          key={cardData.id || index}
          id={cardData.id}
          src={cardData.src}
          alt={cardData.alt || cardData.title}
          title={cardData.title}
        />
      ))}
    </div>
    </>
  );
}

export default GridRandomCards;
