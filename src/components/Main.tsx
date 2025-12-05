


function Grid () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full mx-auto px-8 sm:px-20 pt-48 sm:pt-32 pb-20">
      <div className='bg-green-500 h-40'>1</div>
      <div className='bg-green-500 row-span-2'>2</div>
      <div className='bg-green-500 h-40'>3</div>
      <div className='bg-green-500 h-40'>4</div>
      <div className='bg-green-500 h-40'>5</div>
    </div>
  );
}

export default Grid;