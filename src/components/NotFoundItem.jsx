import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundItem() {
    return (
        <div className='center'>
            <h4 className='font-monospace'>The page you're looking for could not be found.</h4>
            <h4 className='font-monospace fw-bold'>Please go back to Home</h4>

            <Link to='/' className='btn btn-info'>Go back</Link>
        </div>
    )
}
