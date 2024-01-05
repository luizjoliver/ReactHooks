"use client"

import SearchResults from "@/components/SearchResults"
import { FormEvent, useState ,useCallback} from "react"


export default function Home() {

  const [search,setSearch] = useState("")
  const [results,setResults] = useState([])

  async function handleSearch(e:FormEvent){
    e.preventDefault()

    if(!search.trim()){
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setResults(data)
  }

  const addToFavoriteList = useCallback(async(id:number) => {
    console.log(id)
    
},[])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>

        <input type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-black"/>

        <button type="submit">Buscar</button>
      </form>

      <SearchResults
       results={results}
       onAddToFavorite={addToFavoriteList}/>
    </div>
  )
}
