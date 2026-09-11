import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Info() {
    const params = useParams();
    const nav = useNavigate();
    const [itemInfo, setItemInfo] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        const url = `https://www.omdbapi.com/?i=${params["id"]}&apikey=5a292f28`;
        try {
            const { data } = await axios.get(url);
            console.log(data);
            setItemInfo(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='main-content text-center not-page' >
            <header className='container-fluid bg-dark p-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='logo col-auto'>
                            <h2 className='text-white'>{itemInfo.Title}</h2>
                        </div>
                    </div>
                </div>
            </header>
       
            <div className='container my-5'>
            <img src={itemInfo.Poster} className='col-md-2' />
            <h2>{itemInfo.Title}</h2>
            <div>Actors: {itemInfo.Actors}</div>
            <div>Rating: {itemInfo.imdbRating}</div>
            <div className='col md-5 mx-auto'>Movie Plot: {itemInfo.Plot}</div>
            <button className='btn btn-warning mt-3' onClick={() => {
                nav(-1);
            }}>Back to Home
            </button>
            </div>
             

        </div>
    )
}
