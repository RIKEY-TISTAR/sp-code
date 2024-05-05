import Banner from '@/components/Singles/Banner/Banner'
import Content from '@/components/Singles/Content/Content'
import Title from '@/components/Singles/Title/Title'
import React from 'react'

export default function singleProject({ params }) {
  return (
    <>
      <Banner getBanner={'/assets/img/projects/1.jpg'} />
      <Title>{params.slug}</Title>
      <Content getContent={'Привет, Мир! Я Олег! Привет, Мир! Я Олег! Привет, Мир! Я Олег! Привет, Мир! Я Олег!'} />
    </>
  )
}
