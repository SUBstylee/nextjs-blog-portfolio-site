import { useState, useEffect } from 'react'
import { getCategories } from '../../services'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// import {DarkToggle} from '../portfolio';

const DarkToggle = dynamic(() => import('../portfolio/darktoggle/DarkToggle'), {
  ssr: false,
})

// const categories=[
//     {name:'React',slug:'react'},
//     {name:'Web Development',slug:'web-dev'}
// ];

const Header = () => {
  const [categories, setCategories] = useState([])
  const [port, setPort] = useState(false)

  const router = useRouter()

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
    if (globalThis?.window?.location.pathname === '/portfolio') setPort(true)
    router.events.on('routeChangeComplete', () => {
      if (globalThis?.window?.location.pathname === '/portfolio') {
        setPort(true)
      } else {
        setPort(false)
      }
    })
  }, [port])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="text-light inline-block w-full border-b py-8">
        <div className="block md:float-left">
          <Link href={port ? '/portfolio' : '/'}>
            <span className="cursor-pointer text-4xl font-bold ">
              JJThrelfall
            </span>
            <span className="cursor-pointer text-2xl font-bold ">
              {port ? 'Portfolio' : 'Blog'}
            </span>
          </Link>
        </div>
        <div className="block md:float-left">
          <Link href={port ? '/' : '/portfolio'}>
            <span
              className={`text-300 blink-soft float-right ml-4 mt-2 cursor-pointer align-middle font-semibold`}
            >
              {port ? 'Blog' : 'Portfolio'}
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:float-left md:contents">
          <p className="mt-2 align-middle md:hidden ">
            <small>Categories</small>
          </p>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="ml-4 mt-2 cursor-pointer  align-middle font-semibold md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
          <p className="text-light mt-2 hidden align-middle md:float-right md:block">
            <small>Categories</small>
          </p>
          {!port && (
            <div className="mr-3 mt-2 align-middle md:float-right md:block">
              <DarkToggle />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
