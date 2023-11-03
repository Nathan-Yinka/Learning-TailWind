import './App.css'

function App() {

  return (
    <div>
      <p className=' text-customColour-100  border-4 border-green-700'>This is my first paragraph</p>
      <h3 className='text-xl md:text-2xl lg:text-3xl '>this a another text for test </h3>

      <h3 className=' text-4xl underline decoration-wavy  underline-offset-8 decoration-1 '>Title One ggg</h3>
      <h3 className='text-5xl leading-normal'>Tiltle Two</h3>
      <p className='text-base'>The regular text</p>
      <p className=' text-sm'>The decription text</p>
      <p className='text-xs'>The small text</p>

      <p className=' lowercase '> THis text was TRAnsformed back to lower case</p> 
      <div  className=' whitespace-nowrap'> ggggggggggggggg ggfffbfbbfndnddndnnd ndndndfbbfbffbfbffgghhghghh bfbffbfbffbffffffffff ghghhghghg ndfnngngnnncnnfnfnfnfnfg</div>

      <p className='py-10 bg-gray-700 font-black px-[10px]'>this is the padding test</p>

      <div className='flex space-x-4'>
      <p className='w-1/3 bg-black'>vgjg</p>
      <p className='w-1/3 bg-green-500'>vgjg</p>
      <p className='w-1/3 bg-gray-300'>vgjg</p>
      </div>
    </div>
  )
}

export default App
