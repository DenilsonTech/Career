import Header from '@/components/Header'
import { HoverEffect } from '@/components/ui/CardHover'
import { templatesPreview } from '@/data/templatesPreview'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

const Modelos = () => {
  return (
    <section>
       <div className='bg-[#000319]'>
        <Header/>
      </div>
      <div className='wrapper'>
        <h1 className='heading mt-10'>Escolha o Modelo Desejado</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 ml-16'>
          {templatesPreview.map((template) => (
            <HoverEffect
            key={template.id}
              items={[
                {id: template.id, title: template.title, link: template.link, img: template.img}
              ]}
            />
          ))}
        </div>
      </div>
    </section>
   

  )
}

export default Modelos