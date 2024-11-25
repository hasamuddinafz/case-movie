import { Camera, Clock, Discover, DocumentDownload, Moon, NotificationBing, SearchNormal1, Setting2,  Star1, Timer1 } from 'iconsax-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../img/profile.jpg'
import thunbnail from '../img/movie-thunbnail.jpg'
import seriesThunbnail from '../img/series-thunbnail.jpg'
function Home() {
    const [activeLink, setActiveLink] = useState('discovery'); // Default active link
  return (
    <>
     <div className=''>
        <div className='navbar p-3 px-10 flex justify-between items-center '>
            <div className='navbar-brand'>
                <h1 className='font-bold text-2xl'>CineMax</h1>
            </div>
            <div className='navbar-items flex justify-between items-center'>
                <Link className='m-3 font-medium'>Movies</Link>
                <Link className='m-3 font-medium'>Series</Link>
                <Link className='m-3 font-medium'>Animation</Link>
                <Link className='m-3 font-medium'>Genres</Link>
            </div>
            <div className='right-items flex justify-around items-center'>
                <div className='search-btn mx-5'>
                    <Link><SearchNormal1></SearchNormal1></Link>
                </div>
                <div className='payment-btn mx-5'>
                    <Link className='bg-primary p-3 px-6 text-white rounded-3xl'>Payment</Link>
                </div>
                <div className='notification mx-5'>
                    <NotificationBing></NotificationBing>
                </div>
                <div className='user w-10 h-10 mx-5'>
                    <img className='rounded-full' src={profileImage} alt=''/>
                </div>
            </div>
        </div>
        <div className='main-content flex '>
        <div className="sidebar bg-grayscale-20 w-72 py-10 h-screen border border-r-4">
            <h1 className="text-grayscale-80 text-sm my-3 ml-4">MENU</h1>
            <ul>
                <li className={`${ activeLink === 'discovery' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('discovery')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><Discover /></span>
                    <span>Discovery</span>
                </Link>
                </li>
                <li className={`${ activeLink === 'top-rated' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('top-rated')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><Star1 /></span>
                    <span>Top Rated</span>
                </Link>
                </li>
                <li className={`${ activeLink === 'coming-soon' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('coming-soon')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><Timer1 /></span>
                    <span>Coming Soon</span>
                </Link>
                </li>
                
            </ul>
            <h1 className="text-grayscale-80 text-sm my-3 ml-4">LIBRARY</h1>
            <ul>
                <li className={`${ activeLink === 'recent-played' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('recent-played')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><Clock /></span>
                    <span>Recent Played</span>
                </Link>
                </li>
                <li className={`${ activeLink === 'download' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('download')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><DocumentDownload /></span>
                    <span>Download</span>
                </Link>
                </li>
                <li className={`${ activeLink === 'dark-mode' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('dark-mode')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><Moon /></span>
                    <span>Dark Mode</span>
                </Link>
                </li>
                <li className={`${ activeLink === 'setting' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('setting')}>
                <Link className='flex items-center font-bold p-2 rounded-lg'>
                    <span className="mx-2 ml-4"><Setting2 /></span>
                    <span>Setting</span>
                </Link>
                </li>
            </ul>
        </div>
        <div className='content p-8'>
            <h1 className='text-2xl font-extrabold'>Top Rated</h1>
            <div className='top-rated-cards flex justify-around items-center'>
                <div className='card flex items-center p-4'>
                    <div className='number'>
                        <span className='text-5xl font-bold'>1</span>
                    </div>
                    <div className='thunbnail mx-4'>
                        <img className='w-32 h-48 rounded-xl' src={thunbnail} alt=''/>
                    </div>
                    <div className='card-description flex flex-col justify-around p-2'>
                        <span className='my-2 date border rounded-lg text-center'>2025</span>
                        <span className='my-2 name text-lg font-bold'>Movie Name</span>
                        <span className='my-2 category flex'> <span><Camera variant='Bold' color='#434E58' /></span> Drama</span>
                        <span className='my-2 imbd flex '><span><Star1 color='yellow' variant='Bold' /></span> 9.2</span>
                    </div>
                </div>

                <div className='card flex items-center p-4'>
                    <div className='number'>
                        <span className='text-5xl font-bold'>2</span>
                    </div>
                    <div className='thunbnail mx-4'>
                        <img className='w-32 h-48 rounded-xl' src={thunbnail} alt=''/>
                    </div>
                    <div className='card-description flex flex-col justify-around p-2'>
                        <span className='my-2 date border rounded-lg text-center'>2025</span>
                        <span className='my-2 name text-lg font-bold'>Movie Name</span>
                        <span className='my-2 category flex'> <span><Camera variant='Bold' color='#434E58' /></span> Drama</span>
                        <span className='my-2 imbd flex '><span><Star1 color='yellow' variant='Bold' /></span> 9.2</span>
                    </div>
                </div>

                <div className='card flex items-center p-4'>
                    <div className='number'>
                        <span className='text-5xl font-bold'>2</span>
                    </div>
                    <div className='thunbnail mx-4'>
                        <img className='w-32 h-48 rounded-xl' src={thunbnail} alt=''/>
                    </div>
                    <div className='card-description flex flex-col justify-around p-2'>
                        <span className='my-2 date border rounded-lg text-center'>2025</span>
                        <span className='my-2 name text-lg font-bold'>Movie Name</span>
                        <span className='my-2 category flex'> <span><Camera variant='Bold' color='#434E58' /></span> Drama</span>
                        <span className='my-2 imbd flex '><span><Star1 color='yellow' variant='Bold' /></span> 9.2</span>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl font-extrabold'>Best Of Series</h1>
            <div className='series-card flex'>
                <div className='card flex flex-col p-4'>
                    <img className='w-64 rounded-lg' src={seriesThunbnail} alt='' />
                    <span className='my-2 name font-bold'>The Man from Toronto</span>
                    <div className='flex'>
                        <span><Star1 variant='Bold' color='yellow'/></span> <span className='font-bold text-grayscale-100'>9.3   <span className='text-grayscale-80 text-sm'>| Action * Movie</span></span>
                    </div>
                </div>
                <div className='card flex flex-col p-4'>
                    <img className='w-64 rounded-lg' src={seriesThunbnail} alt='' />
                    <span className='my-2 name font-bold'>The Man from Toronto</span>
                    <div className='flex'>
                        <span><Star1 variant='Bold' color='yellow'/></span> <span className='font-bold text-grayscale-100'>9.3   <span className='text-grayscale-80 text-sm'>| Action * Movie</span></span>
                    </div>
                </div>
                <div className='card flex flex-col p-4'>
                    <img className='w-64 rounded-lg' src={seriesThunbnail} alt='' />
                    <span className='my-2 name font-bold'>The Man from Toronto</span>
                    <div className='flex'>
                        <span><Star1 variant='Bold' color='yellow'/></span> <span className='font-bold text-grayscale-100'>9.3   <span className='text-grayscale-80 text-sm'>| Action * Movie</span></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>   
    </>
  )
}

export default Home