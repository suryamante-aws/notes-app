import { useState } from "react"
import { MdSearch } from "react-icons/md"

const Search = ({filterNotes}) => {
    const [searchText, updateSearchText]=useState('')    
    return (
        <div className='search'> 
            <MdSearch className='search-icon' />
            <input className='search-input'
                value={searchText}
                autoFocus='true'
                placeholder='Type to search...'
                onChange={(event)=>{
                    filterNotes(event.target.value)
                    updateSearchText(event.target.value)
                }}
            />
        </div>
    )
}

export default Search