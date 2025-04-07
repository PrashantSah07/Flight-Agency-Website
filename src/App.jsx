import React from 'react'
import TopNavbar from './components/TopNavbar.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import SearchFlight from './components/SearchFlight.jsx'
import TravelSupport from './components/TravelSupport.jsx'
import TravelMemories from './components/TravelMemories.jsx'
import MinorLounge from './components/MinorLounge.jsx'
import TopTravelersOfThisMonths from './components/TopTravelersOfThisMonths.jsx'
import Footer from './components/Footer.jsx'

const array = [
    {
        place: 'https://images.unsplash.com/photo-1628221680019-f28a2716e727?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
        traveler: 'https://images.unsplash.com/photo-1620834767726-61b1986287ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbiUyMGluJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D',
        username: "Emma Carter",
        socialMediaHandle: "@emmacrt"
    },
    {
        place: 'https://images.unsplash.com/photo-1619187269972-267d2b78a423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmclMjBrb25nfGVufDB8fDB8fHww',
        traveler: 'https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
        username: 'Wilson Lindsey',
        socialMediaHandle: '@wilsonhndsey'
    },
    {
        place: 'https://images.unsplash.com/photo-1524562865630-b991c6c2f261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
        traveler: 'https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1lbnxlbnwwfHwwfHx8MA%3D%3D',
        username: "Liam Johnson",
        socialMediaHandle: "@liamjnsn"
    },
    {
        place: 'https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww',
        traveler: 'https://images.unsplash.com/photo-1571387575413-553ab54ddf6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmwlMjBpbiUyMGJlYWNofGVufDB8fDB8fHww',
        username: "Noah Bennett",
        socialMediaHandle: "@noahbntt"
    }
]

const App = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <Home text='Create Ever-lasting Memories With Us' />
            <SearchFlight />
            <TravelSupport />
            <TravelMemories />
            <MinorLounge />
            <TopTravelersOfThisMonths text='Top travelers of this month!' array={array} />
            <Footer />
        </div>
    )
}

export default App
