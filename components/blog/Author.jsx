import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mb-8 mt-20 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute -top-14 left-0 right-0">
        <Image
          unoptimized
          src={author.photo.url}
          alt="author.name"
          height={100}
          width={100}
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">{author.bio}</p>
      <a href="/portfolio" className="btn mt-5">
        Portfolio
      </a>
    </div>
  )
}

export default Author
