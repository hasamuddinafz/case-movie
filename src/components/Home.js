    import { Camera, Clock, Discover, DocumentDownload, Moon, NotificationBing, SearchNormal1, Setting2,  Star1, Timer1 } from 'iconsax-react'
    import React, { useEffect, useState } from 'react'
    import { Link } from 'react-router-dom'
    import profileImage from '../img/profile.jpg'

    // import thunbnail from '../img/movie-thunbnail.jpg'
    // import seriesThunbnail from '../img/series-thunbnail.jpg'
    import axios from 'axios';
    import Slider from 'react-slick'

    function Home() {
        const [activeLink, setActiveLink] = useState('discovery'); 
        const [data, setData] = useState(null);
        const [seriesData, setSeriesData] = useState(null);

        const [isDarkMode, setIsDarkMode] = useState(false);
        useEffect(()=>{
            axios.get('https://imdb-top-100-movies.p.rapidapi.com',
                {
                    path: '/',
                    headers: {
                        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
                        'x-rapidapi-key': 'e07c8f9c39msh8f5848698667592p1b5dadjsn11ba049c43dd'
                    },
                    params: {category: 'all', count: '20'}
                }
            )
            .then(response =>{
                setData(response.data.slice(0, 20));
            })
            .catch(error=>{
                console.error(error);
            });

            axios.get('https://imdb-top-100-movies.p.rapidapi.com',
                {
                    path: '/series/',
                    headers: {
                        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
                        'x-rapidapi-key': 'e07c8f9c39msh8f5848698667592p1b5dadjsn11ba049c43dd'
                    },
                    params: {category: 'all', count: '20'}
                }
            )
            .then(response =>{
                setSeriesData(response.data.slice(0, 20));
            })
            .catch(error=>{
                console.error(error);
            });
        }, []);
        //togglenin fonksiyonu
        const toggleTheme = () => {
            if (isDarkMode) {
              setIsDarkMode(false);
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
            } else {
              setIsDarkMode(true);
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            }
          };
        // const data = [
        //     {
        //       id: 1,
        //       rank: 1,
        //       image: "https://via.placeholder.com/150x200.png?text=Movie+1",
        //       title: "The Grand Adventure",
        //       year: "2023",
        //       genre: "Action",
        //       rating: "8.5",
        //     },
        //     {
        //       id: 2,
        //       rank: 2,
        //       image: "https://via.placeholder.com/150x200.png?text=Movie+1",
        //       title: "Mystery of the Lost Island",
        //       year: "2022",
        //       genre: "Adventure",
        //       rating: "7.9",
        //     },
        //     {
        //       id: 3,
        //       rank: 3,
        //       image: "https://via.placeholder.com/150x200.png?text=Movie+1",
        //       title: "Romantic Escape",
        //       year: "2021",
        //       genre: "Romance",
        //       rating: "8.2",
        //     },
        //     {
        //       id: 4,
        //       rank: 4,
        //       image: "https://via.placeholder.com/150x200.png?text=Movie+1",
        //       title: "The Silent Mystery",
        //       year: "2020",
        //       genre: "Thriller",
        //       rating: "7.4",
        //     },
        //     {
        //       id: 5,
        //       rank: 5,
        //       image: "https://via.placeholder.com/150x200.png?text=Movie+1",
        //       title: "Comedy Nights",
        //       year: "2019",
        //       genre: "Comedy",
        //       rating: "7.0",
        //     },
        //   ];
        const settings = {
            dots: false,
            infinite: true, // Prevent infinite looping
            speed: 1000,
            slidesToShow: 4, // Adjust based on the number of visible cards
            slidesToScroll: 1, // Number of slides to scroll at a time
            responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
            ]
        };

    return (
        <>
        <div className='dark:bg-darksmooth m-0 dark:text-white'>
            <div className='navbar m-0 py-3 px-10 flex justify-between items-center '>
                <div className='navbar-brand'>
                    <h1 className='font-bold text-2xl '>CineMax</h1>
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
                    <div className='user w-10 h-10'>
                        <img className='rounded-full' src={profileImage} alt=''/>
                    </div>
                </div>
            </div>
            <div className='main-content flex flex-row w-auto'>
                <div className="dark:bg-linedark bg-grayscale-20 w-2/12 py-10 h-screen m-0">
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
                        <li className={`flex items-center ${ activeLink === 'dark-mode' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('dark-mode')}>
                        <Link className='flex items-center font-bold p-2 rounded-lg'>
                            <span className="mx-2 ml-4"><Moon /></span>
                            <span>Dark Mode</span>
                        </Link>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onClick={toggleTheme}/>
                                <div className="relative w-11 h-6 bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
                            </label>
                        </li>
                        <li className={`${ activeLink === 'setting' ? 'text-primary border-l-8 border-l-primary' : 'text-grayscale-80' }`} onClick={() => setActiveLink('setting')}>
                        <Link className='flex items-center font-bold p-2 rounded-lg'>
                            <span className="mx-2 ml-4"><Setting2 /></span>
                            <span>Setting</span>
                        </Link>
                        </li>
                    </ul>
                </div>        
            
            
                <div className='w-10/12 p-8'>
                    <h1 className='text-2xl font-extrabold'>Top Rated</h1>
                    <div className="slider-container p-4 ">
                        {data ? (
                            <Slider {...settings}>
                            {data.map((item) => (
                                <div key={item.id} className="p-2">
                                <div className="card rounded-xl overflow-hidden flex flex-row items-center w-96 mr-10">
                                    <div className="number">
                                    <span className="text-5xl font-bold">{item.rank}</span>
                                    </div>
                                    <div className="thumbnail mx-1">
                                        <img className="w-24 h-32 rounded-xl object-cover" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="card-description flex flex-col justify-between px-1">
                                        <span className="my-1 border rounded-lg text-center text-xs p-1 w-2/4">{item.year}</span>
                                        <span className="my-1 text-sm font-bold">{item.title.slice(0, 15)}...</span>
                                        <span className="my-1 category flex items-center text-xs">
                                            <span>
                                            <Camera variant="Bold" color="#434E58" size="18" />
                                            </span>
                                            {item.genre[0]}
                                        </span>
                                        <span className="my-2 imdb flex">
                                            <span>
                                            <Star1 color="yellow" variant="Bold" />
                                            </span>
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </Slider>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>

                    <h1 className='text-2xl font-extrabold'>Best Of Series</h1>
                    <div className="slider-container p-4 ">
                        {seriesData ? (
                            <Slider {...settings}>
                            {seriesData.map((item) => (
                                <div key={item.id} className="p-2">
                                <div className="card rounded-xl overflow-hidden flex flex-col items-start w-96 mr-10">
                                    <div className="thumbnail mx-1 overflow-hidden">
                                        <img className='w-64 h-96 object-cover rounded-lg' src={item.big_image} alt='' />
                                    </div>
                                    <span className='my-2 name font-bold'>{item.title}</span>
                                    <div className='flex items-center'>
                                        <span><Star1 variant='Bold' color='yellow'/></span> <span className='font-bold text-grayscale-100'>{item.rating} <span className='text-grayscale-80 text-xs'>| {item.genre[0]} • {item.genre[1]}</span></span>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </Slider>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>

            </div>
        </div>   
        </>
    )
    }

    export default Home