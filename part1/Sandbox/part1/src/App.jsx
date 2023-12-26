import { useState } from 'react'
import reactLogo from './assets/react.svg'
import koyukan from './assets/koyukan.svg'
import './App.css'
import TodoList from './TodoList'
import Gallery from './Gallery.jsx'

const App = () => {
  const [count, setCount] = useState(0)

  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      'en-US',
      { weekday: 'long' }
    ).format(date);
  }

  const scientists = [
    {
      name: 'Ada Lovelace',
      imageId: 'JSupVxR',
      born: 1815,
      died: 1852,
      description:
        'Ada Lovelace was a British mathematician and writer, chiefly known for her work on Charles Babbage\'s proposed mechanical general-purpose computer, the Analytical Engine.',
    },
    {
      name: 'Albert Einstein',
      imageId: 'GRLVtX5',
      born: 1879,
      died: 1955,
      description:
        'Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time.',
    },
    {
      name: 'Johannes Kepler',
      imageId: 'l8ZUUm9',
      born: 1571,
      died: 1630,
      description:
        'Johannes Kepler was a German mathematician, astronomer, and astrologer. He is a key figure in the 17th-century scientific revolution, best known for his laws of planetary motion.',
    },
    {
      name : 'Stephen Hawking',
      imageId: '1EMUKri',
      born: 1942,
      died: 2018,
      description:
        'Stephen Hawking was an English theoretical physicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at the University of Cambridge at the time of his death.',
    }
  ]

  return (
    <>
      <div>
        <Gallery scientists={scientists.filter(scientist => scientist.born < 1930)} />
        <a href="https://koyukan.com" target="_blank" rel="noreferrer">
          <img src={koyukan} className="logo" alt="Koyukan logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Hello world, it is {formatDate(today)}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <TodoList />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
