import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj?.children) {
      modifiedText = obj.children.map((child, i) =>
        getContentFragment(i, child.text, child, child.type)
      )
    }

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{modifiedText}</b>
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{modifiedText}</em>
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{modifiedText}</u>
      }
      if (obj.type === 'code' || obj.code) {
        modifiedText = (
          <code
            key={index}
            className="rounded bg-gray-600 px-1 py-0.5 font-mono text-sm text-white"
          >
            {modifiedText}
          </code>
        )
      }
    }

    switch (type) {
      case 'heading-one':
        return (
          <h1 key={index} className="mb-6 text-5xl font-bold">
            {modifiedText}
          </h1>
        )
      case 'heading-two':
        return (
          <h2 key={index} className="mb-5 text-4xl font-semibold">
            {modifiedText}
          </h2>
        )
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText}
          </h3>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText}
          </h4>
        )
      case 'heading-five':
        return (
          <h5 key={index} className="mb-3 text-base font-semibold">
            {modifiedText}
          </h5>
        )
      case 'heading-six':
        return (
          <h6 key={index} className="mb-3 text-sm font-semibold">
            {modifiedText}
          </h6>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText}
          </p>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      case 'link':
        return (
          <a
            key={index}
            href={obj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {modifiedText}
          </a>
        )
      case 'code-block':
        return (
          <pre
            key={index}
            className="mb-8 overflow-auto rounded bg-gray-900 p-4 text-white"
          >
            <code>{modifiedText}</code>
          </pre>
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="bg__theme mb-8 rounded-lg p-3 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle"
            />
            <p className="text-700 ml-2 inline align-middle text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="text-700 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(itemIndex, item.text, item, item.type)
        )
        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}

export default PostDetail
