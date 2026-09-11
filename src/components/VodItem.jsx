import React from 'react'
import { Link } from 'react-router-dom'

export default function VodItem(props) {
  return (
    <div className='col-md-4 p-2'>
      <div className='boreder p-2 h-100 overflow-hidden shadow'>
        <img src={props.item.Poster} className='float-start-me-2 w-25' />
        <h2>{props.item.Title}</h2>
        <div>--Year: {props.item.Year} --</div>
        <Link to={`/info/${props.item.imdbID}`} className='btn btn-danger'>MORE INFO</Link>
      </div>
    </div>
  )
}
