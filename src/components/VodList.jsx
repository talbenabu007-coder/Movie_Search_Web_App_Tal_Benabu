import React from 'react'
import VodItem from './VodItem'

export default function VodList(props) {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <h2>List of movies:</h2>
            <div className='row'>
                {props.vod_array.map(item => {
                  return(
                  <VodItem key={item.imdbID} item={item}/>
                  )
                })}
            </div>
        </div>
    </div>
  )
}
