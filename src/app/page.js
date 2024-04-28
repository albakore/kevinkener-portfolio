import React from 'react'
import Main from '@/components/Main'
import cv from 'public/curriculum/cv.json'

export default async function page() {
  // console.log(res)
  // cv = await res.text()
  
  return (
    <Main perfil={cv}/>
    // <div>{ cv}</div>
  )
}
