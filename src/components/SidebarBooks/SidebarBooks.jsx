import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export const SidebarBooks = ({getBook,className = null}) => {
  return (
    <div className={className + ' w-full ga-thite rounded-lg p-4 shadow-sm'}>
        <div className="w-full flex items-center justify-between">
            <h3 className="text-lg text-stone-900">Книги для разработчиков</h3>
            <Link href={''} className='text-sm text-blue-500'>Смотреть все</Link>
        </div>
        <ul className="w-full flex flex-col gap-2 pt-5">
        {[1,2,3,4,5,6,7].map((item,index) => {
                return (
                    <li key={index} className="text-sm text-stone-900 ">
                        <Link href={''} className='w-full flex items-center justify-between group'>
                            <div className="flex items-center gap-2">
                                <Image src={''}></Image>
                            </div>
                        </Link>
                    </li>
                );
            })}        
        </ul>
    </div>
  )
}
