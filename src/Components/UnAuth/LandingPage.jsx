import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'

export default function LandingPage() {
    return (
        <div>
            <Navbar/>
            <Link to="/login">Login</Link>
        </div>
    )
}
