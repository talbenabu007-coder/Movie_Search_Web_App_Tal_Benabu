import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VodInput() {
    const inputRef = useRef();
    const nav = useNavigate();

    const searchClick = () => {
        const val = inputRef.current.value;
        nav(`/?s=${val}`)
    }

    const keyboardClick = (e) => {
        if(e.key == "Enter") {
            searchClick();
        }
    }

    return (
        <header className='container-fluid bg-dark p-2'>
            <div className='container'>
                <div className='row'>
                    <div className='logo col-auto'>
                        <h2 className='text-white'>Find Movie</h2>
                    </div>
                    <nav className='d-flex col-md-4'>
                        <input ref={inputRef} onKeyDown={keyboardClick} placeholder='enter a movie...' type='search'
                            className='form-control' />

                        <button type='submit' onClick={searchClick} className='btn btn-warning'>Search</button>

                    </nav>
                </div>
            </div>
        </header>
    )
}
