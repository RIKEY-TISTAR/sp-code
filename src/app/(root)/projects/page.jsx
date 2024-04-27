import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Heading from '@/components/UI/Heading/Heading';
import React from 'react';

export default function projects() {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto">
            <Heading text='Готовые проекты' className={'mb-5'} />
            <ProjectCard getData={''} />
            <button className="mt-5 w-full py-5 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-colors">Показать больше</button>
        </div>
      </section>
    </>
  )
}
