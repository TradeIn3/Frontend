import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import PostCard from '../Card/PostCard'

export default function LandingPage() {
    return (
        <div>
            <h1>This is unauth  home page.</h1>
            <Link to ="/login">Login</Link>
            <PostCard/>
        </div>
    )
}
