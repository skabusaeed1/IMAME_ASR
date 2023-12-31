import React from 'react'
import './Books.css'
import {books} from '../../../dummydata'
import Quran from '../../../images/Quran.jpg'
import Head from '../../Head/Head'
import Navbar from '../../Navbar/Navbar'
import Heading from '../../Heading/Heading'
import NewsLetter from '../../NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import image from '../../../images/cartoon3.png'

const Books = () => {
  return (
    <div>
    <div className='view-2'>
        <Head/>
        <Navbar/>
        <Heading line={"Discover a World of Islamic Knowledge"} page={"Books Page"} image={image}/>
     </div>
        <div className='books'>
        <h1>Books</h1>
    <div className='Quran-img'>
        <img src={Quran} alt="" />
    </div>
      <div className='books-main'>
        {
            books.map((elem,index)=>{
                return <div key={index} className='books-1'>
                    <div className='books-img'>
                        <img src={elem.image} alt="" />
                    </div>
                    <div>
                        <h3>{elem.name}</h3>
                        <a href={elem.link} target='blank'>View</a>
                    </div>
                </div>
            })
        }
      </div>
    </div>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Books
