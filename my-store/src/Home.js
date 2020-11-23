import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="iamge for home page " />

                <div className="home__row">
                    <Product
                        id="25847845"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNCg_Gubz0v7sD-2xZuRY6s6Eu0Iwmx1E8Q7FTY0gUarZtnklgfADQaCpcowq94uagzBtiiYa&usqp=CAc" rating={5} />
                    <Product
                        id="12365848"
                        title='Macbook Pro 13"'
                        price={1229.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGME5tiHhtcf4n0VuorW-e6OBu6_Ko_gx2FZ6PsCkSmZKf8RRNdrrrX5Rc&usqp=CAc"
                        rating={4} />
                    {/* 2 components */}
                </div>
                <div className="home__row">
                    {/* 3 components */}
                    <Product
                        id="6258747"
                        title='Iphone 12 Pro'
                        price={1229.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ta6mHCA144HFT4N9q2ITo--0QDkOg_irTdVTR9NiOhd4GfxoFop5TCJcZ-YtnaM2MQ0xCJFS&usqp=CAc"
                        rating={4}
                    />
                    <Product
                        id="8954848"
                        title='Lenovo C740'
                        price={799.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUvilwZiKEW4uJr1cblwnxfhgmRP_9urw5rb6SZg9XV4Vyu8o5hlT-2Q4L7HppOqvMZ6sU5A&usqp=CAc"
                        rating={4} 
                    />
                    <Product id="89747558"
                        title='Dyson Vaccum'
                        price={499.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpBhlK1JQDvXuWOG8ODW3JhQjkJSlAhvYAwHUg4A5shxoQ1v3Y0LhC86we_D0IePrAk6mH9hF&usqp=CAc"
                        rating={5} />

                </div>
                <div className="home__row">
                    {/* 1 components */}
                </div>
            </div>
        </div>
    )
}

export default Home
