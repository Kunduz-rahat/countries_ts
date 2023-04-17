
import { useEffect } from 'react'
import { useInput } from '../../hooks/input'
import {IoSearch} from 'react-icons/io5'
import './index.scss'


function Search () {
  const input = useInput('')

  useEffect(()=>{
    console.log(input.value)
  }, [input.value])

  return (
    <div className='search'>
      <IoSearch/>
      <input className='search_input'
      placeholder='Search ...' 
      type='text'
      {...input}/>
    </div>
  )
}


export default Search