const servicesArray = [
  {
    service: 'Logo Design',
    description:
      'We create a logo that is more than just an image, it is the visual representation of your brand’s identity. A well-designed logo can increase brand recognition and trust among customers.'
  },
  {
    service: 'Brand Identity Design',
    description:
      'We design a visual identity that reflects the essence of your brand. From the color palette to the typography, every element is carefully chosen to create a cohesive and memorable brand experience.'
  },
  {
    service: 'Print Design',
    description:
      'We design print materials that not only look good but also effectively communicate your message. From brochures to business cards, we create designs that will leave a lasting impression.'
  },
  {
    service: 'Packaging Design',
    description:
      'We design packaging that not only protects your product but also enhances its appeal. Our designs are both functional and visually appealing, capturing the attention of potential customers.'
  }
]

const Services = () => {
  return (
    <section className='h-full bg-black py-8 text-white lg:py-52 '>
      <div className='container space-y-8 md:space-y-32'>
        <h2 className='mdText'>Services</h2>
        {servicesArray.map((list, i) => (
          <div key={i} className='flex flex-col gap-6 lg:flex-row'>
            <h2 className='flex-1 text-2xl lg:text-3xl'>{list.service}</h2>
            <p className='flex-1 opacity-70 lg:text-2xl'>{list.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
