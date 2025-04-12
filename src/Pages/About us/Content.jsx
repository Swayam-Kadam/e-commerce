import React,{useState} from 'react'


const Content = () => {
    const[activeParagraph,setActiveParagraph] = useState("one")
  return (
    <div className='flex justify-evenly flex-col md:flex-row  mx-auto max-w-[95rem] mb-5'>
        <div id="image" className='flex justify-center mb-4'>
            <img src="/images/about/about1.webp" alt="" className='w-3/4' />
        </div>
        <div className='flex flex-col  gap-4 '>

            <div className='flex  gap-4 ml-5'>
            <button className={`border border-black font-bold py-2 px-2 ${activeParagraph==="one"? "bg-black text-white" : "hover:bg-black hover:text-white"}`} onClick={()=>setActiveParagraph("one")}>
            About Us
            </button>
            <button className={`border border-black font-bold transition py-2 px-2 ${activeParagraph==="two"?"bg-black text-white" : "hover:bg-black hover:text-white"}`} onClick={()=>setActiveParagraph("two")}>
            Service
            </button>
            <button className={`border border-black font-bold transition py-2 px-2 ${activeParagraph==="three"?"bg-black text-white" : "hover:bg-black hover:text-white"}`} onClick={()=>setActiveParagraph("three")}>
            Histroy
            </button>
            </div>

            <div className='m-3'>
                { activeParagraph==="one"&&( 
                <p className='text-gray-500'>ONE ipsum dolor sit amet, consectetur adipisicing elit. Eos,<br /> fugiat nulla animi reiciendis porro ratione voluptatibus quo omnis,<br /> magnam repellat provident nostrum? Deleniti, laborum?<br /> fugiat nulla animi reiciendis porro ratione voluptatibus quo omnis,<br /> magnam repellat provident nostrum? Deleniti, laborum?</p>
                )}
                { activeParagraph==="two"&&( 
                <p className='text-gray-500'>TWO ipsum dolor sit amet, consectetur adipisicing elit. Eos,<br /> fugiat nulla animi reiciendis porro ratione voluptatibus quo omnis,<br /> magnam repellat provident nostrum? Deleniti, laborum?<br /> fugiat nulla animi reiciendis porro ratione voluptatibus quo omnis,<br /> magnam repellat provident nostrum? Deleniti, laborum?</p>
                )}                
                { activeParagraph==="three"&&( 
                <p className='text-gray-500'>THREE ipsum dolor sit amet, consectetur adipisicing elit. Eos,<br /> fugiat nulla animi reiciendis porro ratione voluptatibus quo omnis,<br /> magnam repellat provident nostrum? Deleniti, laborum?<br /> fugiat nulla animi reiciendis porro ratione voluptatibus quo omnis,<br /> magnam repellat provident nostrum? Deleniti, laborum?</p>
                )}                
                <a href="" className='text-black font-bold ' style={{textDecoration:'none'}}>Lern More</a>
            </div>  
        </div>
    </div>
  )
}

export default Content