import React from 'react'

const Content = () => {
    const names=['Company Policies','Payment Options','Terms & Conditions','Positioning','Efficient','Marketplace','Conditions','Mind Procedure','Delivery Job'];
    const heading=['1. Branding is simply a more efficient way to sell things?'
                   ,'2. Its better to be first in the mind than to be first in the marketplace?'
                   ,'3. Marketing is a company’s ultimate objective?'
                   ,'4. Positioning is what you do to the mind of the prospect?'
                   ,'5. Branding is simply a more efficient way to sell things?'
                   ,'6. It’s better to be first in the mind than to be first in the marketplace?'
                   ,'7. Marketing is a company’s ultimate objective?'
                   ,'8. Positioning is what you do to the mind of the prospect?8. Positioning is what you do to the mind of the prospect?'
                   ,'9. It’s better to be first in the mind than to be first in the marketplace?'
                ]

  return (
    <div className=' flex mx-auto max-w-[95rem] mb-5'>
        <div className='w-2/5 p-4 hidden md:block'>
        <h4 className='font-bold tracking-widest'>FREQUENTLY ASKED QUESTIONS</h4>
        <p className='text-gray-400 text-lg mt-10 mb-16'>Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper. A comment from a friend.</p>
        
        {
            names.map((items)=>(
                <p key={items} className='text-gray-400 text-lg'>{items}</p>
            ))
        }
        {/* Styled Input Field */}
        <form action="" className="mt-6">
                <input 
                    type="text" 
                    placeholder="Type your question..." 
                    className="w-50% border border-gray-400  p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                />
            </form>
        </div>
        <div className='w-full md:w-3/5 p-4 mx-auto'>
        {
            heading.map((item)=>(
                <ul>
                <h5 key={item} className='font-bold'>{item}</h5>
                <p className='mt-8 mb-8 text-gray-400'>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis.</p>
                </ul>
            ))
        }
        </div>
    </div>
  )
}

export default Content