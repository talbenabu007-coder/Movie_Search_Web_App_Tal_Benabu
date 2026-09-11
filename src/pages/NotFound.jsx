import React from 'react'
import NotFoundStrip from '../components/NotFoundStrip'
import { Link } from 'react-router-dom'
import './NotFound.css'
import NotFoundItem from '../components/NotFoundItem'
import NotFoundBar from '../components/NotFoundBar'

export default function NotFound() {
    return (
        <div className='not-page'>
            <NotFoundStrip />
            <NotFoundBar/>
            <NotFoundItem/>
        </div>

    )
}
