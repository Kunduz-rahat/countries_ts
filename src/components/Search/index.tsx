
import { useInput } from '../../hooks/input'
import './index.scss'


const Search = () => {
  const input = useInput('')
  return (
    <div className='search'>
      <input 
      placeholder='Search ...' 
      type='text'
      {...input}/>
    </div>
  )
}


export default Search