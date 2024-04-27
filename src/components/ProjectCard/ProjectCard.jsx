import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ getData }) => {
    return (
        <div className='w-full grid grid-cols-3 gap-5'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                    <article key={index} className="w-full h-full bg-white rounded-md p-5">
                        <div className="relative w-full h-[230px] rounded-md overflow-hidden mb-7">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 py-1 px-2 rounded-full bg-black z-[99]">
                                <span className='text-xs text-gray-300 font-medium cursor-default'>HTML&CSS</span>
                            </div>
                            <Image fill loading='lazy' src={'/assets/img/projects/1.jpg'} alt='Изображение проекта' className='w-full h-full object-cover object-center' />
                        </div>
                        <h3 className="text-lg font-medium mb-1">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        <Link href={'/projects/' + 'web-project'} className='text-blue-500 hover:underline'>Смотреть подробнее</Link>
                    </article>
                );
            })}
        </div>
    )
}

export default ProjectCard
