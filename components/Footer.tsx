const Footer = () => {
  return (
    <footer className='mt-12 border-t bg-black text-white'>
      <div className='container space-y-8 py-16'>
        <div>
          {/* <h2>Contact for clients</h2> */}
          <p className='pr-8 opacity-75'>
            &copy; 2023 District Agency, all rights reserved
          </p>
        </div>
        <div className=''>
          <h2 className='mb-5 text-lg'>Services.</h2>
          <p className='opacity-75'>Web Development</p>
        </div>
        <div>
          <h2 className='mb-5 text-lg'>Contact.</h2>
          <p className='opacity-75'>+639566754237</p>
        </div>
        <p className='text-lg opacity-75'>Phase 10A Package 1 Block 36 Lot 6</p>
      </div>
    </footer>
  )
}

export default Footer
