import { useState } from 'react'


function App() {
  const [calculate, setCalculate] = useState('')

  const handle = (e)=>{
    setCalculate(calculate + e)
  }

  const handleEqual = ()=>{
    const result = eval(calculate)
    setCalculate(result)
  }

  const handleClear = (h)=>{
     setCalculate(h)
  }

  const handleRemove = ()=>{
    setCalculate(calculate.slice(0, -1))
 }


  return (
    <>
    <div className='h-[100vh] w-full flex justify-center items-center flex-col'>
      <div className='border-2 border-black w-[25vw] flex flex-col justify-center items-center rounded-xl bg-gray-400'>

         <h1 className='text-5xl font-bold text-blue-950 mb-10 mt-4'>Calculator</h1>
         <input type="text" className='h-14 w-60 border-2 border-black mb-4 pl-3 text-xl bg-white' disabled value={calculate}  />
          <div>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white'onClick={()=>{handleClear('')}}>AC</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white'onClick={()=>{handle('%')}}>%</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white'onClick={()=>{handleRemove('')}}>C</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white'onClick={()=>{handle('/')}}>÷</button> <br />

            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('7')}}>7</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('8')}}>8</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('9')}}>9</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('*')}}>x</button> <br />

            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('4')}}>4</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('5')}}>5</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('6')}}>6</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('-')}}>-</button> <br />

            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('1')}}>1</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('2')}}>2</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('3')}}>3</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 bg-white' onClick={()=>{handle('+')}}>+</button> <br />

            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 mb-6 bg-white' onClick={()=> {handle('00')}}>00</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 mb-6 bg-white' onClick={()=> {handle('0')}}>0</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 mb-6 bg-white' onClick={()=> {handle('.')}}>.</button>
            <button className='h-12 w-12 border-2 border-black rounded-xl font-bold m-1 mb-6 bg-white' onClick={()=> {handleEqual()}}>=</button> <br />
          </div>

      </div>
          
    </div>
    </>
  )
}

export default App




