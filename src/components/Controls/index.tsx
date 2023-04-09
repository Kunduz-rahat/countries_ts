import React from 'react'
import Search from '../Search'
import './index.scss'
import Filter from '../Filter'
const Controls = () => {
  return (
    <div className='controls'>
        <Search/>
        <Filter/>
    </div>
  )
}


export default Controls