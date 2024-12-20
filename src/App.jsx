import React, { useState } from 'react'
import axios from 'axios'

function SendSMS () {
  const [searchQuery, setSearchQuery] = useState('theannoyingsite.com')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // Fetch so'rovi: URL ni backendga yuborish
      fetch('http://localhost:5000/open-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: searchQuery }) // `searchQuery`ni yuborish
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
    } catch (error) {
      console.error('Xato:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Salom</button>
      </form>
    </div>
  )
}

export default SendSMS
