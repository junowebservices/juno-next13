import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='my-24'>
      <Image
        src='/bg-sample.png'
        alt='bg-sample'
        width={1600}
        height={500}
        className='mx-auto object-contain lg:w-10/12 lg:rounded-3xl'
      />
    </div>
  )
}

export default Portfolio
