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
        traveler: '/src/assets/travelers3.avif',
        username: "Emma Carter",
        socialMediaHandle: "@emmacrt"
    },
    {
        place: 'https://images.unsplash.com/photo-1619187269972-267d2b78a423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmclMjBrb25nfGVufDB8fDB8fHww',
        traveler: '/src/assets/travelers2.avif',
        username: 'Wilson Lindsey',
        socialMediaHandle: '@wilsonhndsey'
    },
    {
        place: 'https://images.unsplash.com/photo-1524562865630-b991c6c2f261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
        traveler: '/src/assets/travelers1.avif',
        username: "Liam Johnson",
        socialMediaHandle: "@liamjnsn"
    },
    {
        place: 'https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww',
        traveler: '/src/assets/travelers4.avif',
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
