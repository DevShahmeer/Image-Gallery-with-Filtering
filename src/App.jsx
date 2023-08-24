import { useState } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery'

function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Image Gallery with Unsplash API</h1>
        </header>
        <main>
          <ImageGallery/>
        </main>
      </div>
    </>
  )
}

export default App
