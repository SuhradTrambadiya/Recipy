'use client'
import React, { useState, useEffect } from 'react';
import Gallery from "../components/Gallery";

const Page = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItemData(data.recipes); // Ensure your API response has a `recipes` key
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Gallery itemData={itemData} />
    </div>
  );
}

export default Page;
