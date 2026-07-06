import React from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'

const ProductScroll = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Build resumes that <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
                get you <span className='text-green-600'>hired</span>
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/resume-builder-preview.png"
          alt="Tailr resume builder"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-top-left"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}

export default ProductScroll