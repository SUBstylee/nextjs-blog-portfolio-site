import { useState,useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts,getSimilarPosts } from "../../services";

const PostWidget = ({categories,slug}) => {
  const [relatedPosts,setRelatedPosts]=useState([]);

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug).then((res)=>setRelatedPosts(res));
    }else{
      getRecentPosts().then((res)=>setRelatedPosts(res));
    }
  }, [slug])
  
  return (
    <div className="bg__theme shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug?'Related Posts':'Recent Posts'}
      </h3>
      {relatedPosts.map((post)=>(
        <Link href={`/post/${post.slug}`} key={post.title}>
          <a>
        <div key={post.title} className='flex items-center w-full mb-4 cursor-pointer'>
          <div className="w-16 flex-none">
            <img src={post.featuredImage.url} alt={post.title} height='60px' width='60px' className='align-middle rounded-full' />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-500 text-xs text-light">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <p className="text-base">
              {post.title}
            </p>
          </div>
        </div>
        </a>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;