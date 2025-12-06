
function Card({src, alt, title, description, span, imgfull }: {src?: string, alt?: string, title?: string, description?: string, span?: string, imgfull?: string}) { 
  return (
    
    <div className={`${span} border  rounded-3xl flex flex-col items-start text-center hover:scale-[1.02] transition-transform duration-300 shadow-black/50 shadow-xl `}>
      <a href="/">
      <img src={src} alt={alt} className={`${imgfull} rounded-t-3xl `} />
      <h2 className='text-green-950 text-2xl text-start  mx-6 font-bold mt-4 mb-2'>{title}</h2>
      <p className='text-green-900 mx-6 mb-4 text-start'>{description} </p>
      </a>
    </div>
    
  );
}

export default Card;