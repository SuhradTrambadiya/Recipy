"use client";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useRouter } from 'next/navigation';

export default function Page() {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter(); // Initialize the useRouter hook
  const handleClick = (id) => {
    console.dir(`/recipy/${id}`);
    router.push(`/recipy/${id}`); // Use useRouter hook to navigate to the recipe page
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setRecipes(data.recipes); // Update state with fetched recipes array
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
        setRecipes([]); // Set an empty array if there's an error
      }
    }

    fetchData(); // Call the function to fetch recipes
  }, []);

  useEffect(() => {
    // Remove horizontal scroll bar from the entire page
    document.body.style.overflowX = "hidden";
    // Cleanup function to restore horizontal scroll bar when the component unmounts
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

 

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-black w-screen p-5">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 z-10">
          {Array.isArray(recipes) && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Card
                key={recipe.id}
                imageSrc={recipe.image}
                title={recipe.name}
                rating={recipe.rating}
                description={recipe.instructions[3]} // Use the fourth instruction as the description
                amenities={[
                  `Prep Time: ${recipe.prepTimeMinutes} minutes`,
                  `Servings: ${recipe.servings}`,
                ]}
                handleOnClick={() => handleClick(recipe.id)} 
              />
            ))
          ) : (
            <p>No recipes available</p>
          )}
        </div>
      </div>
    </div>
  );
}
