import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import VodStrip from '../components/VodStrip'
import VodList from '../components/VodList'
import VodInput from '../components/VodInput'

import "./Home.css"
import axios from 'axios'


export default function Home() {
  const [array, setArray] = useState([]);
  const [quarys] = useSearchParams();
  const nav = useNavigate();

  useEffect(() => {
    const searchQuary = quarys.get("s") || "breaking bad";
    doApi(searchQuary);
  },[quarys])

  const doApi = async(_search) => {
    const url = `https://www.omdbapi.com/?s=${_search}&apikey=5a292f28`;
    try {
    const {data} = await axios.get(url);
    console.log(data);
    if(!data.Search) {
      nav("/*")
      return;
    }
    setArray(data.Search)
    }
    catch(err) {
      console.log(err);
    }
  }
  return (
    <div>
      <VodInput/>
      <VodStrip/>
      <VodList vod_array={array}/>
    </div>
  )
}
