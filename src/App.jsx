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
        place: '/src/assets/paris.avif',
        traveler: '/src/assets/travelers3.avif',
        username: "Emma Carter",
        socialMediaHandle: "@emmacrt"
    },
    {
        place: '/src/assets/america.avif',
        traveler: '/src/assets/travelers2.avif',
        username: 'Wilson Lindsey',
        socialMediaHandle: '@wilsonhndsey'
    },
    {
        place: '/src/assets/dubaii.avif',
        traveler: '/src/assets/travelers1.avif',
        username: "Liam Johnson",
        socialMediaHandle: "@liamjnsn"
    },
    {
        place: '/src/assets/dubai.avif',
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
