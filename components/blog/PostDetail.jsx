import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj?.children) {
    modifiedText = obj.children.map((child, i) =>
      getContentFragment(i, child.text, child, child.type)
    );
  } else if (!text && obj) {
    modifiedText = obj.text || '';
  }

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{modifiedText}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{modifiedText}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{modifiedText}</u>;
    }
  }

  switch (type) {
    case 'heading-one':
      return <h1 key={index} className="text-5xl font-bold mb-6">{modifiedText}</h1>;
    case 'heading-two':
      return <h2 key={index} className="text-4xl font-semibold mb-5">{modifiedText}</h2>;
    case 'heading-three':
      return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText}</h3>;
    case 'heading-four':
      return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText}</h4>;
    case 'heading-five':
      return <h5 key={index} className="text-base font-semibold mb-3">{modifiedText}</h5>;
    case 'heading-six':
      return <h6 key={index} className="text-sm font-semibold mb-3">{modifiedText}</h6>;
    case 'paragraph':
      return <p key={index} className="mb-8">{modifiedText}</p>;
    case 'image':
      return <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;
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
      );
    case 'code-block':
      return (
        <pre key={index} className="bg-gray-900 text-white rounded p-4 overflow-auto mb-8">
          <code>{modifiedText}</code>
        </pre>
      );
    default:
      return modifiedText;
  }
};

  return (
    <div className="bg__theme shadow-lg rounded-lg lg:p-8 p-3 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
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
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
      </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(itemIndex, item.text, item)
        );
        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default PostDetail;