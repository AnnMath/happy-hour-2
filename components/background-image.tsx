import Image from 'next/image'

const BackgroundImage = () => {
  return (
    <Image
      src="/background-img.jpg"
      alt=""
      fill
      style={{ objectFit: 'cover' }}
      priority
    />
  )
}

export default BackgroundImage
