import React, { useState, useEffect } from 'react';
import md5 from 'md5';
import Spinner from './Spinner';
import Card from './Card';

const Container = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
      const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);

      const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setComics(data.data.results); // Ensure you're accessing the correct path
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  return (
    <main className='container mx-auto p-6 flex justify-center items-center'>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className='grid grid-cols-4 gap-4'>
          {comics.map((comic) => (
            <Card
              key={comic.id}
              img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              title={comic.title}
              desc={comic.description || 'No description available'} // Provide a fallback
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Container;
