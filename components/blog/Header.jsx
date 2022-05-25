import { useState,useEffect } from "react";
import { getCategories } from "../../services";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";
// import {DarkToggle} from '../portfolio';

const DarkToggle = dynamic(() => import('../portfolio/darktoggle/DarkToggle'), {
    ssr: false
  });

// const categories=[
//     {name:'React',slug:'react'},
//     {name:'Web Development',slug:'web-dev'}
// ];

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [port, setPort] = useState(false);

    const router=useRouter();
    
    useEffect(() => {
    getCategories().then((newCategories)=>{setCategories(newCategories);});
    if(globalThis?.window?.location.pathname === '/portfolio')setPort(true);
    router.events.on('routeChangeComplete',()=>{
        if(globalThis?.window?.location.pathname === '/portfolio'){
            setPort(true);
        }else{
            setPort(false);
        };
    });
    }, [port]);
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block text-light py-8">
            <div className="md:float-left block">
                <Link href='/'>
                    <a>
                        <span className="cursor-pointer font-bold text-4xl ">
                            JJThrelfall
                        </span>
                    </a>
                </Link>
            </div>
            <div className="md:float-left block">
                    <Link href='/portfolio'>
                        <a>
                            <span className={`float-right mt-2 align-middle text-300 ml-4 font-semibold cursor-pointer ${port?'':'blink-soft'}`}>
                                Portfolio
                            </span>
                        </a>
                    </Link>
            </div>
            <div className="flex flex-col md:float-left md:contents">
                <p className="md:hidden mt-2 align-middle "><small>Categories</small></p>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <a>
                            <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </a>
                    </Link>
                ))}
                <p className="hidden md:block md:float-right mt-2 align-middle text-light"><small>Categories</small></p>
                <div className="md:block md:float-right mt-2 mr-3 align-middle"><DarkToggle /></div>
            </div>
        </div>
    </div>
  );
};

export default Header;