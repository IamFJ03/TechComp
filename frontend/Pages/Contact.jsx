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
import call from '../src/assets/call.png'
import mail from '../src/assets/mail.png'
import location from '../src/assets/location.png'
import linked from '../src/assets/Linked.png'
import insta from '../src/assets/insta.png'
import facebook from '../src/assets/facebook.png'
import twitter from '../src/assets/twitter.png'

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className="text-black-600 text-2xl font-bold">LogoIpsum</h1>
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
      <div className='w-screen h-80 bg-blue-950 md:right-40 right-8 relative flex flex-col items-center justify-center mt-10'>
        <p className='text-red-500 font-bold text-4xl'>Contact</p>
        <p className='text-md text-white'>HOME / CONTACT</p>
      </div>
      <div className='bg-red-50 w-screen relative md:right-40 right-8 h-350 md:h-200'>
              <p className='text-red-500 text-2xl font-bold pt-20'>\ Get In Touch \</p>
              <p className='text-4xl text-black font-bold'>Hey! Let's Talk</p>
              <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between px-40 py-10'>
                <div className='h-140 w-90 md:w-200 bg-white rounded-2xl flex flex-col gap-10 relative right-30 md:right-0'>
                  <input type='text' placeholder='Name' className=' bg-gray-100 p-3 mx-10 mt-10 rounded' />
                  <input type='text' placeholder='Email' className='bg-gray-100 p-3 mx-10 rounded' />
                  <input type='text' placeholder='Phone' className=' bg-gray-100 p-3 mx-10 rounded' />
                  <textarea type='text' placeholder='Your Message' rows={4} cols={50} className=' bg-gray-100 p-3 mx-10 rounded' />
                  <button className='self-start ml-10 bg-red-500 text-white p-3 rounded'>Send Now</button>
                </div>
                <div className='h-140 w-90 bg-white rounded-2xl flex flex-col gap-10 p-10 relative md:right-0 right-30'>
                  <div className='flex gap-5'>
                    <img src={call} className='bg-gray-100 p-3 rounded-2xl h-13' />
                    <div className='text-left'>
                      <p className='text-red-500 font-bold'>Call Anytime</p>
                      <p>+ 91 23678 27867</p>
                      <p>+ 91 67678 92878</p>
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <img src={mail} className='bg-gray-100 p-3 rounded-2xl h-12' />
                    <div className='text-left'>
                      <p className='text-red-500 font-bold'>Send Email</p>
                      <p>connect@itfirms.com</p>
                      <p>hello@itfirms.com</p>
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <img src={location} className='bg-gray-100 py-3 px-4 rounded-2xl h-13' />
                    <div className='text-left'>
                      <p className='text-red-500 font-bold'>Visit Us</p>
                      <p>20 Island Park Road, </p>
                      <p>New Jearsy, New York, USA</p>
                    </div>
                  </div>
                  <p className='font-bold text-2xl'>Follow Us</p>
                  <div className='flex justify-between px-5'>
                    <img src={linked} className='bg-red-500 p-3 rounded' />
                    <img src={insta} className='bg-red-500 p-3 rounded' />
                    <img src={facebook} className='bg-red-500 p-3 rounded' />
                    <img src={twitter} className='bg-red-500 p-3 rounded' />
                  </div>
                </div>
              </div>
            </div>
        <div className='hidden md:block relative ml-40 mt-30'>
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
