
import './Poster.css'

function Poster() {
  return (
    <div className="poster">
        <div>
          <h1>Find Over 25000+ Colleges in India</h1>
          <div className='search-row'>
          <input type="text" placeholder='Search for colleges, exams, courses and more......'/>
          <button>Search </button>
          </div>
          <button className='btn'>Need Counselling</button>
        </div>
    </div>
  )
}

export default Poster