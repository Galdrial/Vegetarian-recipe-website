import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearResultsCards } from '../redux/ResultsCardsSlice';

function stripHtml(html?: string) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '');
}

function CardDetail( { src, alt, title, instructions, id, backTo }: { src?: string, alt?: string, title?: string, instructions?: string, id?: string, backTo?: string } ) {
  const dispatch = useDispatch();
  // Improve instructions formatting: use a bullet list if there are multiple steps, otherwise a single paragraph
  let formattedInstructions: React.ReactNode = null;
  if (instructions) {
    const cleanInstructions = stripHtml(instructions);
    const steps = cleanInstructions.split(/\r?\n|\.(?=\s|$)/).map(s => s.trim()).filter(Boolean);
    if (steps.length > 1) {
      formattedInstructions = (
        <ul className="list-disc pl-6">
          {steps.map((step, idx) => (
            <li key={idx} className='text-green-900 mb-2 text-start text-lg'>
              {step.charAt(0).toUpperCase() + step.slice(1)}
            </li>
          ))}
        </ul>
      );
    } else {
      formattedInstructions = (
        <p className='text-green-900 mb-4 text-start text-lg'>
          {steps[0].charAt(0).toUpperCase() + steps[0].slice(1)}
        </p>
      );
    }
  }
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl text-black mx-auto mb-12 mt-6 px-12 bg-white" id={id}>
      <h2 className='text-lime-700 text-3xl text-center  mx-6 font-bold mb-10'>{title}</h2>
      <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded-t-xl overflow-hidden mb-12">
        <img src={src} alt={alt} className="w-full object-cover rounded-t-xl" />
      </div>
      {formattedInstructions}
        <div className="flex justify-end">
          <button
            className="mt-6 px-4 py-2 bg-lime-700 text-white rounded-3xl hover:bg-lime-800 transition"
            onClick={() => {
              if (backTo === '/') {
                dispatch(clearResultsCards());
                window.dispatchEvent(new CustomEvent('clearCards'));
              }
              navigate(backTo || '/');
            }}
          >
            Back to Results
          </button>
        </div>
    </div>
    
  );
}

export default CardDetail;