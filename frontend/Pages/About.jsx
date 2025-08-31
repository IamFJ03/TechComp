import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import maskGroup from '../src/assets/Mask group.png'
import black from '../src/assets/Black.png'
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

export default function About() {
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
          <ul className='absolute top-14 flex flex-col gap-6 items-center shadow-md my-4 py-4 w-full left-0 md:hidden bg-white z-50'>
            <Link to="/About"><li>About</li></Link>
          <Link to="/Service"><li>Our Service</li></Link>
          <Link to="/Portfolio"><li>Portfolio</li></Link>
          <Link to="/Blog"><li>Blog</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          </ul>
        )}
      </div>
      <div className='w-screen h-50 bg-blue-950 md:right-40 right-8 relative flex flex-col items-center justify-center'>
        <p className='text-red-500 font-bold text-4xl'>About</p>
        <p className='text-md text-white'>HOME / ABOUT</p>
      </div>
      <div className=' flex flex-col md:flex-row relative  h-230 md:h-150 bg-gray-100 w-screen md:right-40 right-8 gap-10 md:gap-0 justify-between md:px-40 py-30'>
              
              <div className=''>
                <img src={maskGroup} className='h-70 md:h-100 relative left-10 md:left-0 w-90 md:w-120' />
              </div>
              <div className='text-left ml-15'>
                <p className='text-red-500 mb-3 text-2xl align-middle text-center md:text-left'>\ About Us \</p>
                <p className='mb-3 text-4xl'>One of the Fastest Way to <br />
                  Business Growth</p>
                <p className='mb-3'>It is a long established fact that a reader will be distracted by the <br />
                  readable content of a page when looking at its layout. The point of <br />
                  using Lorem Ipsum is that it has a more-or-less normal distribution <br />
                  of letters, as opposed</p>
                <div className='flex items-center bg-white p-5 rounded md:w-115 w-100'>
                  <div className='mr-5'>
                    <img src={black} />
                  </div>
                  <div>
                    <p>Get Instant Professional Advice</p>
                    <div className='flex'>
                      <p>Ready to Help :</p>
                      <p className='text-red-500'>+1 356 678 7897</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-400 md:h-180 w-screen relative right-8 md:right-40 '>
                    <div className='relative top-30'>
                      <p className='text-2xl text-red-500 font-bold'>\ Team \</p>
                      <p className='text-4xl font-bold mb-10'>Our Leaders</p>
                      <div className='flex md:flex-row flex-col justify-between px-40 gap-10 md:gap-0'>
                        <div>
                          <img src={rectangle14} className='' />
                          <p className='text-red-500 mt-5 mb-5 font-bold'>Larry F. Burnett</p>
                          <p>CEO</p>
                        </div>
                        <div>
                          <img src={rectangle15} />
                          <p className='text-red-500 mt-5 mb-5 font-bold'>Meghan J. Webb</p>
                          <p>CTO</p>
                        </div>
                        <div>
                          <img src={rectangle16} />
                          <p className='text-red-500 mt-5 mb-5 font-bold'>Yvonne J. Cullum</p>
                          <p>CFO</p>
                        </div>
                        <div>
                          <img src={rectangle17} />
                          <p className='text-red-500 mt-5 mb-5 font-bold'>Diana H. Williams</p>
                          <p>COO</p>
                        </div>
                      </div>
                    </div>
                  </div>
        <div className='hidden md:block relative ml-40'>
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
