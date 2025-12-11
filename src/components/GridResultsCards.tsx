import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resultsSelector, setResultsCards } from '../redux/ResultsCardsSlice';
import Card from './Card';

function GridResultsCards() {
  const cards = useSelector(resultsSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (cards.length === 0) {
      async function fetchResultsCards() {
        try {
          const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
          const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=8&diet=vegetarian`);
          interface SpoonacularRecipe {
            id: number;
            title: string;
            image: string;
            instructions?: string;
          }
          const cards = response.data.results.map((item: SpoonacularRecipe) => ({
            id: String(item.id),
            title: item.title,
            src: item.image,
            alt: item.title,
          }));
          dispatch(setResultsCards(cards));
          console.log('Fetched results cards:', response.data);
        } catch (error) {
          console.error('Error fetching results cards:', error);
        }
      }
      fetchResultsCards();
    }
  }, [cards.length, dispatch]);

  return (
    <>
    <h2 className='font-playwrite text-lime-700 text-4xl font-bold text-center mt-12'>Results Recipes</h2>
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

export default GridResultsCards;