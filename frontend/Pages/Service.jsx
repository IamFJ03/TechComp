import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import maskGroup from '../src/assets/Mask group.png'
import black from '../src/assets/Black.png'
import group21 from '../src/assets/Group 21.png'
import youngPeople from '../src/assets/youngPeople.png'
import black5 from '../src/assets/Black5.png'
import black6 from '../src/assets/Black6.png'
import black7 from '../src/assets/Black7.png'
import black8 from '../src/assets/Black8.png'
import black9 from '../src/assets/Black9.png'
import black10 from '../src/assets/Black10.png'
import black11 from '../src/assets/Black11.png'
import black12 from '../src/assets/Black12.png'
import rectangle14 from '../src/assets/Rectangle 14.png'
import rectangle15 from '../src/assets/Rectangle 15.png'
import rectangle16 from '../src/assets/Rectangle 16.png'
import rectangle17 from '../src/assets/Rectangle 17.png'
import rectangle28 from '../src/assets/Rectangle 28.png'
import vector from '../src/assets/Vector.png'
import rectangle29 from '../src/assets/Rectangle 29.png'
import python from '../src/assets/python.png'
import react from '../src/assets/React.png'
import word from '../src/assets/word.png'
import linked from '../src/assets/Linked.png'
import insta from '../src/assets/insta.png'
import facebook from '../src/assets/facebook.png'
import twitter from '../src/assets/twitter.png'

export default function Service() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className="text-black-600 text-2xl">LogoIpsum</h1>
        <ul className="hidden md:flex gap-6 items-center">
          <Link to="/About"><li>About</li></Link>
          <Link to="/Service"><li>Our Service</li></Link>
          <Link to="/Portfolio"><li>Portfolio</li></Link>
          <Link to="/Blog"><li>Blog</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          <button className='border-1 px-3 py-2 rounded text-white bg-red-500'>Get In Touch</button>
        </ul>
        <button className='border-1 px-3 py-2 rounded text-white bg-red-500 md:hidden'>Get In Touch</button>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {isOpen && (
          <ul className="absolute top-14 left-0 flex flex-col gap-6 items-center shadow-md my-4 py-4 w-full md:hidden bg-white z-50">
            <Link to="/About"><li>About</li></Link>
            <Link to="/Service"><li>Our Service</li></Link>
            <Link to="/Portfolio"><li>Portfolio</li></Link>
            <Link to="/Blog"><li>Blog</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
          </ul>
        )}
      </div>
      <div className='w-screen h-50 bg-blue-950 md:right-40 right-8 relative flex flex-col items-center justify-center'>
        <p className='text-red-500 font-bold text-4xl'>Services</p>
        <p className='text-md text-white'>HOME / SERVICES</p>
      </div>
      <div className='relative md:right-40 right-8 mt-30 md:h-200 h-400 bg-gray-100 p-40 w-screen flex flex-col md:flex-row justify-between gap-20 md:gap-0 text-left'>
              <div className='relative md:w-110 w-90 right-30 md:right-0'>
                <img src={youngPeople} className='h-90 md:h-120 rounded-2xl' />
              </div>
              <div className='relative md:w-150 w-100 right-30 md:right-0'>
                <p className='text-2xl text-red-500 mb-5'>\ What We Do \</p>
                <p className='text-4xl font-bold mb-10'>We Develope Product That <br />
                  People Love to Use.</p>
                <p>It is a long established fact that a reader will be distracted by the<br />
                  readable content of a page when looking at its layout. The point of <br />
                  using Lorem Ipsum is that it has a more-or-less normal distribution <br />
                  of letters, as opposed, Lorem Ipsum is that it has a more-or-less<br /> normal distribution of letters, as opposed</p>
                <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center mt-10'>
                  <div className='flex w-70 justify-between bg-white px-10 py-5 rounded-2xl '>
                    <img src={black5} className='bg-red-100 p-3 rounded-2xl' />
                    <div>
                      <p className='text-red-500'>Our Vision</p>
                      <p>It is a long esta<br />
                        -blished fact that</p>
                    </div>
                  </div>
                  <div className='flex w-70 justify-between bg-white px-10 py-5 rounded-2xl md:ml-10'>
                    <img src={black6} className='bg-red-100 p-3 rounded-2xl' />
                    <div>
                      <p className='text-red-500'>Our Goal</p>
                      <p>It is a long esta<br />
                        -blished fact that</p>
                    </div>
                  </div>
                </div>
                <button className='bg-red-500 text-white px-7 py-3 rounded-2xl mt-5 hover:cursor-pointer relative left-15 top-5 md:top-0 md:left-0'>View More</button>
              </div>
            </div>
            <div className='mt-20'>
              <p className='text-red-500 text-2xl font-bold'> \ Services \</p>
              <p className='font-bold text-4xl'>Our Expertise</p>
              <div className='flex md:flex-row flex-col w-80vw flex-wrap gap-10 mt-10'>
                <div className='bg-gray-100 p-10 text-left rounded-2xl'>
                  <img src={black7} className='bg-white p-3 rounded-2xl' />
                  <p className='font-bold mb-3 mt-3'>Web Design / Development</p>
                  <img src={group21} className='mb-3' />
                  <p>It is a long established fact that a reader<br /> will be distra by the readable content of<br /> a page when looking at its layout, when<br /> looking at its layout</p>
                </div>
                <div className='bg-gray-100 p-10 text-left rounded-2xl'>
                  <img src={black8} className='bg-white p-3 rounded-2xl' />
                  <p className='font-bold mb-3 mt-3'>UI/UX Design</p>
                  <img src={group21} className='mb-3' />
                  <p>It is a long established fact that a reader<br /> will be distra by the readable content of<br /> a page when looking at its layout, when<br /> looking at its layout</p>
                </div>
                <div className='bg-gray-100 p-10 text-left rounded-2xl'>
                  <img src={black9} className='bg-white p-3 rounded-2xl' />
                  <p className='font-bold mb-3 mt-3'>Website Migration</p>
                  <img src={group21} className='mb-3' />
                  <p>It is a long established fact that a reader<br /> will be distra by the readable content of<br /> a page when looking at its layout, when<br /> looking at its layout</p>
                </div>
                <div className='bg-gray-100 p-10 text-left rounded-2xl'>
                  <img src={black10} className='bg-white p-3 rounded-2xl' />
                  <p className='font-bold mb-3 mt-3'>App Development</p>
                  <img src={group21} className='mb-3' />
                  <p>It is a long established fact that a reader<br /> will be distra by the readable content of<br /> a page when looking at its layout, when<br /> looking at its layout</p>
                </div>
                <div className='bg-gray-100 p-10 text-left rounded-2xl'>
                  <img src={black11} className='bg-white p-3 rounded-2xl' />
                  <p className='font-bold mb-3 mt-3'>HubSpot Integration</p>
                  <img src={group21} className='mb-3' />
                  <p>It is a long established fact that a reader<br /> will be distra by the readable content of<br /> a page when looking at its layout, when<br /> looking at its layout</p>
                </div>
                <div className='bg-gray-100 p-10 text-left rounded-2xl'>
                  <img src={black12} className='bg-white p-3 rounded-2xl' />
                  <p className='font-bold mb-3 mt-3'>Email Marketing</p>
                  <img src={group21} className='mb-3' />
                  <p>It is a long established fact that a reader<br /> will be distra by the readable content of<br /> a page when looking at its layout, when<br /> looking at its layout</p>
                </div>
              </div>
            </div>
        <div className='hidden md:block relative ml-40 mt-50'>
                <img src={rectangle28} className='md:h-75 relative md:right-0 right-25' />
                <p className='relative text-3xl font-bold bottom-110 p-50 text-white right-15'>“Some of the History of Our Company is that
                  we are Catching up through Video”</p>
                <buttom className='relative bottom-150 text-white bg-red-500 p-3 rounded right-10'>Get In Touch</buttom>
              </div>
              <div className=' h-420 md:h-150 w-screen relative right-8 md:right-40 bg-blue-950 md:bottom-100 mt-20 md:mt-0'>
                      <div className='flex py-20 px-40 text-white text-left items-center justify-between flex-col md:flex-row gap-20 md:gap-0 relative right-25 md:right-0 w-150 md:w-screen'>
                        <div>
                          <div className='flex items-center gap-5'>
                            <img src={vector} />
                            <p className='font-bold text-2xl'>Logoipsum</p>
                          </div>
                          <p className='my-5'>It is a long established<br />
                            fact that a reader will be distracted<br /> by the readable content of a page<br /> when looking at</p>
                          <div className='flex gap-5'>
                            <img src={linked} className='bg-red-500 p-3 rounded' />
                            <img src={insta} className='bg-red-500 p-3 rounded' />
                            <img src={facebook} className='bg-red-500 p-3 rounded' />
                            <img src={twitter} className='bg-red-500 p-3 rounded' />
                          </div>
                        </div>
                        <div>
                          <p className='text-2xl'>Services</p>
                          <img src={rectangle29} className='my-3' />
                          <p>Web Design/Development</p>
                          <p className='my-5'>App Development</p>
                          <p>UI/UX Design</p>
                          <p className='my-5'>HubSpot Integration</p>
                          <p>Email Marketing</p>
                          <p className='mt-5'>Website Migration</p>
                        </div>
                        <div>
                          <p className='text-2xl'>Career</p>
                          <img src={rectangle29} className='my-5' />
                          <div className='flex gap-5'>
                            <img src={react} className='bg-white p-3 rounded' />
                            <div>
                              <p className='text-red-500 font-bold'>ReactJs Dev.</p>
                              <p>1-5 Years of Exp.</p>
                            </div>
                          </div>
                          <div className='flex my-5 gap-5'>
                            <img src={word} className='bg-white p-3 rounded' />
                            <div>
                              <p className='text-red-500 font-bold'>Wordpress Dev.</p>
                              <p>1-5 Years of Exp.</p>
                            </div>
                          </div>
                          <div className='flex gap-5'>
                            <img src={python} className='bg-white px-2 py-5 rounded' />
                            <div>
                              <p className='text-red-500 font-bold'>Python Developer</p>
                              <p>1-5 Years of Exp.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-2xl'>Subscribe Us</p>
                          <img src={rectangle29} className='my-5' />
                          <p className='my-5'>It is a long established<br />
                            fact that a reader will be<br /> distracted by the readable </p>
                          <input type='email' placeholder='Email' className='bg-white rounded py-2 text-black placeholder-gray-500 px-3' /><br />
                          <div className='flex justify-end'>
                            <button className='bg-red-500 text-white p-3 rounded mt-5'>Submit</button>
                          </div>
              
                        </div>
                      </div>
                    </div>
    </div>
  )
}
