import React, { useEffect, useState } from 'react'
import elipse from '../src/assets/Ellipse 1.png'
import group65 from '../src/assets/Group 65.png'
import elipse2 from '../src/assets/Ellipse 2.png'
import maskGroup from '../src/assets/Mask group.png'
import black from '../src/assets/Black.png'
import black1 from '../src/assets/Black1.png'
import black2 from '../src/assets/Black2.png'
import black3 from '../src/assets/Black3.png'
import black4 from '../src/assets/Black4.png'
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
import elipse3 from '../src/assets/Ellipse 3.png'
import elipse4 from '../src/assets/Ellipse 4.png'
import watermark from '../src/assets/mark.png'
import call from '../src/assets/call.png'
import mail from '../src/assets/mail.png'
import location from '../src/assets/location.png'
import linked from '../src/assets/Linked.png'
import insta from '../src/assets/insta.png'
import facebook from '../src/assets/facebook.png'
import twitter from '../src/assets/twitter.png'
import rectangle25 from '../src/assets/Rectangle 25.png'
import rectangle26 from '../src/assets/Rectangle 26.png'
import rectangle27 from '../src/assets/Rectangle 27.png'
import rectangle28 from '../src/assets/Rectangle 28.png'
import vector from '../src/assets/Vector.png'
import rectangle29 from '../src/assets/Rectangle 29.png'
import python from '../src/assets/python.png'
import react from '../src/assets/React.png'
import word from '../src/assets/word.png'
import elipse5 from '../src/assets/Ellipse 5.png'
import elipse6 from '../src/assets/Ellipse 6.png'
import elipse7 from '../src/assets/Ellipse 7.png'

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const testimonials = [
    { id: 0, img: elipse3, review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.', name: 'Samual Karl', role: 'CEO', mark: watermark },
    { id: 1, img: elipse4, review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.', name: 'Daria Linney', role: 'CEO', mark: watermark },
    {
      id: 2,
      img: "https://i.pravatar.cc/100?img=3", review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.', name: "Michael Ross",
      role: "CTO", mark: watermark
    }
  ]
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className='bg-white '>
      <div className='flex items-center justify-between'>
        <h1 className="text-black-600 text-2xl">LogoIpsum</h1>
        <ul className="hidden md:flex gap-6 items-center">
          <li>About</li>
          <li>Our Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
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
          <ul className='absolute top-30 flex flex-col gap-6 items-center shadow-md my-4 py-4 w-md left-0 md:hidden bg-white'>
            <li>About</li>
            <li>Our Service</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
      <div className='md:flex justify-between'>
        <img src={group65} className='md:hidden mt-20' />
        <div className='text-left mt-35 md:mt-35'>
          <img src={elipse} />
          <div className='relative bottom-25 left-10 md:left-20'>
            <p className=' text-red-500 text-2xl pb-2' >\ We Are Here \</p>
            <p className='text-5xl pb-4'>Better Insights For<br />
              Business Growth</p>
            <button className='border-1 px-3 py-2 rounded text-white bg-red-500'>View More</button>
          </div>
        </div>
        <div className=' hidden mt-15 md:flex'>
          <img src={group65} />
        </div>
      </div>

      <div className=' flex flex-col md:flex-row relative md:top-30 h-230 md:h-150 bg-gray-100 w-screen md:right-40 right-8 gap-10 md:gap-0 justify-between md:px-40 py-30'>
        <img src={elipse2} className='hidden md:block absolute bottom-120 left-100' />
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
      <div className='mt-20 md:mt-70'>
        <p className='text-red-500 text-2xl'> \ Planning \</p>
        <p className='font-bold text-4xl'>Our Process</p>
        <div className='flex flex-col md:flex-row gap-20 md:gap-8  mt-20 relative left-10 md:left-0 flex-wrap w-100vw'>
          <div className='h-90 bg-gray-100 w-70 p-10 rounded-2xl'>
            <img src={black1} className='bg-white p-3 rounded-2xl' />
            <p className='text-left font-bold my-5'>Research</p>
            <img src={group21} className='mb-5' />
            <p className='text-left'>It is a long established fact<br /> that a reader will be distra<br /> by the readable content of<br /> a page.</p>
          </div>
          <div className='h-90 bg-gray-100 w-70 p-10 rounded-2xl'>
            <img src={black2} className='bg-white p-3 rounded-2xl' />
            <p className='text-left font-bold my-5'>Design</p>
            <img src={group21} className='mb-5' />
            <p className='text-left'>It is a long established fact<br /> that a reader will be distra<br /> by the readable content of<br /> a page.</p>
          </div>
          <div className='h-90 bg-gray-100 w-70 p-10 rounded-2xl'>
            <img src={black3} className='bg-white p-3 rounded-2xl' />
            <p className='text-left font-bold my-5'>Develop</p>
            <img src={group21} className='mb-5' />
            <p className='text-left'>It is a long established fact<br /> that a reader will be distra<br /> by the readable content of<br /> a page.</p>
          </div>
          <div className='h-90 bg-gray-100 w-70 p-10 rounded-2xl'>
            <img src={black4} className='bg-white p-3 rounded-2xl' />
            <p className='text-left font-bold my-5'>Test</p>
            <img src={group21} className='mb-5' />
            <p className='text-left'>It is a long established fact<br /> that a reader will be distra<br /> by the readable content of<br /> a page.</p>
          </div>
        </div>
      </div>
      <div className='relative md:right-40 right-8 mt-50 md:h-200 h-400 bg-gray-100 p-40 w-screen flex flex-col md:flex-row justify-between gap-20 md:gap-0 text-left'>
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
      <div className='bg-gray-100 h-400 md:h-180 w-screen relative right-8 md:right-40 mt-40'>
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
      <section className="py-16 text-center">
        <h2 className="text-red-500 font-bold text-xl">\ From Our Customers \</h2>
        <h1 className="text-4xl font-bold mb-10">Testimonials</h1>

        <div className="overflow-hidden relative mx-auto w-screen md:right-40 right-8">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out ml-110"
            style={{ transform: `translateX(-${currIndex * 60}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-160 flex-shrink-0 px-6"
              >
                <div className={`bg-gray-100 p-6 rounded-2xl shadow-md max-w-lg mx-auto  transition-all duration-700 ease-in-out ${t.id !== currIndex && "opacity-50 scale-75"}`}>
                  <div className="flex items-center gap-4 mb-4 justify-between">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <img src={t.mark} />
                  </div>
                  <p className="text-gray-700 text-left">{t.review}</p>
                  <div className="text-left mt-5">
                    <p className="font-bold text-red-500">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currIndex ? "bg-red-500" : "border border-red-500"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <div className='mt-40 bg-blue-950 w-screen relative md:right-40 right-8 h-350 md:h-200'>
        <p className='text-red-500 text-2xl font-bold pt-20'>\ Get In Touch \</p>
        <p className='text-4xl text-white font-bold'>Hey! Let's Talk</p>
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
      <div className='bg-gray-100 w-screen relative md:right-40 right-8 md:h-150 h-350 mt-20'>
        <p className='text-red-500 font-bold pt-20 text-2xl'>\ Our Blog \</p>
        <p className='text-4xl font-bold'>Latest Post</p>
        <div className='flex justify-between px-40 mt-10 md:flex-row flex-col gap-10 relative right-30 md:right-0'>
          <div className='h-90 w-90 bg-white rounded-2xl shadow-lg p-5'>
            <img src={rectangle25} />
            <p className='text-left text-red-500 font-bold'>The most Popular Business
              Of the Year</p>
            <div className='flex items-center mt-10'>
              <img src={elipse5} />
              <p className='ml-2'>Ranold Jeff.</p>
              <p className='text-gray-400 text-sm ml-20'>May 4th, 2022</p>
            </div>
          </div>
          <div className='h-90 w-90 bg-white rounded-2xl shadow-lg p-5'>
            <img src={rectangle26} />
            <p className='text-left text-red-500 font-bold'>The most Popular Business
              Of the Year</p>
            <div className='flex items-center mt-10'>
              <img src={elipse6} />
              <p className='ml-2'>Patricia Anderson</p>
              <p className='text-gray-400 text-sm ml-13'>Apr 27th, 2022</p>
            </div>
          </div>
          <div className='h-90 w-90 bg-white rounded-2xl shadow-lg p-5'>
            <img src={rectangle27} />
            <p className='text-left text-red-500 font-bold'>The most Popular Business
              Of the Year</p>
            <div className='flex items-center mt-10'>
              <img src={elipse7} />
              <p className='ml-2'>Elaine Luna</p>
              <p className='text-gray-400 text-sm ml-20'>Apr 20th, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block relative mt-20 ml-40'>
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
