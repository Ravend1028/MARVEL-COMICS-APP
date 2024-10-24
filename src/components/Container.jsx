import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import Card from './Card'

const Container = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      const apiUrl = '';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setComics(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  return (
    <main className='container mx-auto p-6 grid grid-cols-4'>
      {/* Handle Fetched Data Here */}
    </main>
  )
}

export default Container