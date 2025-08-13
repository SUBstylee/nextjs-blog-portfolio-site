import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { FeaturedPostCard } from '../components/blog'
import { getFeaturedPosts } from '../services'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const FeaturedPosts = () => {
  const ArrowFix = (arrowProps) => {
    const { carouselState, children, rtl, ...restArrowProps } = arrowProps
    return <span {...restArrowProps}> {children} </span>
  }

  const [featuredPosts, setFeaturedPosts] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    let abortController = new AbortController()
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result)
      setDataLoaded(true)
    })
    return () => {
      abortController.abort()
    }
  }, [])

  const customLeftArrow = (
    <ArrowFix>
      <div className="arrow-btn bg-600 bg__theme border__slider absolute left-0 cursor-pointer rounded-full py-3 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text__theme h-6 w-6 w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    </ArrowFix>
  )

  const customRightArrow = (
    <ArrowFix>
      <div className="arrow-btn bg-600 bg__theme border__slider absolute right-0 cursor-pointer rounded-full py-3 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text__theme float-right h-6 w-6 w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </ArrowFix>
  )

  return (
    <div className="mb-8">
      <Carousel
        infinite
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  )
}

export default FeaturedPosts
