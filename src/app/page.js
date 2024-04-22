"use client"

import axios from 'axios'
import { useState } from 'react'

const HomePage = () => {

  const [ file, setFile ] = useState()

  return (
    <div>
      <form onSubmit={
        async (e) => {
          e.preventDefault()

          if (!file) return 

          const form = new FormData()
          form.set('file', file)

          const res = await axios.post('/api/upload', form)

          console.log(res.data)
        }
      }>

        <label>Upload File:</label>
        
        <input 
          type="file" 
          onChange={ (e) => setFile(e.target.files[0]) }
        />
        
        <button type='submit'>Upload</button>
      
      </form>
    </div>
  )
}

export default HomePage