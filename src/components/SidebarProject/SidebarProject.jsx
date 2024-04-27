import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const SidebarProject = () => {
  return (
    <div className={className + ' w-full bg-thite rounded-lg p-4 shadow-sm'}>
        <div className="w-full mb-4 aspect-square rounded-lg overflow-hidden">
            <Image priority loading='lazy' fill src={''} alt='Крутая картинка а ты что а ? а ни чо ? на нормально общяйся дуралей' className='w-full h-full object-cover object-center'/>
        </div>
        <h3 className="text-xl text-stone-900">Лучший калькулятор на JS матвей тимофей</h3>
        <ul className="w-full inline-felx gap-2">
            {[1,2,3,4,5,6,7].map((item,index) => {
                return (
                    <li key={index} className="text-sm text-stone-900 ">#JS</li>
                );
            })}          
        </ul>
        <Link href={'/'} className='w-full py-3 rounded-lg bg-blue-500 text-white font-medium block text-center'>Подробно</Link>
    </div>
  )
}
