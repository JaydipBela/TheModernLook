import React from 'react'
import Hero from './Hero'
import HeroAbout from './heroAbout/HeroAbout'
import HomeHover from './HomeHover/HomeHover'
import HomeProduct from './HomeProduct/HomeProduct'
import HomeAnswer from './HomeAnswer/HomeAnswer'
import ReviewSection from './ReviewSection/ReviewSection'
import HomeBlog from './HomeBlog/HomeBlog'
import HomeComport from './HomeComport/HomeComport'

export const Home = () => {
  return (
    <>
    <Hero/>
    <HeroAbout/>
    <HomeHover/>
    <HomeProduct/>
    <ReviewSection/>
    <HomeAnswer/>
    <HomeBlog/>
    <HomeComport/>
    </>
  )
}
