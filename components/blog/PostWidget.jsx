import { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res))
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res))
    }
  }, [slug])

  return (
    <div className="bg__theme mb-8 rounded-lg p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.title}>
          <div
            key={post.title}
            className="mb-4 flex w-full cursor-pointer items-center"
          >
            <div className="w-16 flex-none">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                height="60px"
                width="60px"
                className="rounded-full align-middle"
              />
            </div>
            <div className="ml-4 flex-grow">
              <p className="text-500 text-light text-xs">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="text-base">{post.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget
