import React from 'react'
import Banking  from '../images/image-mockups.png'

function hero() {
  return (
    <section className='home mb-[88px] mds:mb-0 flex mds:flex-row-reverse'>
      <div className='bg-mockup_bg bg-cover bg-center  '>
        <img className="w-full  object-cover object-center transition-transform duration-100 ease-in-out" src={Banking} />
      </div>

      <div className='text-center mds:pt-[250px] mds:pb-[170px] mds:text-left lg:mr-[20rem]'>
        <h1 className='text-[40px] sm:text-[46px] leading-[47px] font-light text-dark-blue tracking-[-0.7px] pb-[16px] md:pb-[20px] lg:pb-[-24px]  mds:leading-[64px] transition-transform md:text-[50px] mds:text-[56px]'>Next generation  <br/> digital banking</h1>
        <p className='text-neutral-400 text-[15px] leading-[25px] w-[330px] sm:w-[400px] mx-auto pb-[32px] lg:pb-[36px] transition-transform lg:text-[18px] lg:font-light'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='bg-gradient-to-br from-green to-cyan text-white px-[32px] py-[12px] rounded-[50vw] font-bold text-[14px] hover:from-green-light hover:to-cyan-light transition-colors duration-[0.1s]'>Request Invite</button>
      </div>
    </section>
  )
}

export default hero 