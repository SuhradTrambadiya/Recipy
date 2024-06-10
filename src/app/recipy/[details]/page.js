import Image from "next/image";
import Link from "next/link";
async function getData(id) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }
  
  const Page = async ({ params }) => {
    const id = params.details;
    const data = await getData(id);
  
    const styles = {
      backgroundColor: '#4d4855',
      backgroundImage: 'linear-gradient(147deg, #4d4855 0%, #000000 74%)'
    };
  
    return (
      <div className="font-sans bg-gradient-to-tr bg-blue-gray-600 bg-cyan-300/50" style={styles}>
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-1/2 lg:sticky top-0 flex items-center justify-center mt-5">
              <Image src={data.image} alt={data.name} className="w-4/5 rounded object-cover" width={256} // Add the width property
                        height={256}/>
            </div>
  
            <div>
              <h2 className="text-2xl font-extrabold text-teal-200">{data.name}</h2>
  
              <div className="flex space-x-2 mt-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg key={index} className={`w-5 ${index < Math.floor(data.rating) ? 'fill-yellow-800' : 'fill-[#CED5D8]'}`} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
  
              <div className="mt-8 bg-gray-700 p-9 text-white rounded-2xl">
                <h3 className="text-lg font-bold text-orange-500">About the item</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-lg text-white">
                  {data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
  
              <div className="mt-8 w-full bg-blue-gray-300 p-9 rounded-lg text-red-900">
                <h3 className="text-lg font-bold">Instructions</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-lg">
                  {data.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
  
              <div className="mt-8 w-full bg-blue-gray-300 p-9 rounded-lg text-red-900">
                <h3 className="text-lg font-bold">Reviews({data.reviewCount})</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">{data.rating.toFixed(1)}</p>
                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-2/3 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>
  
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/3 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                  </div>
  
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/6 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                  </div>
  
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">2.0</p>
                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/12 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                  </div>
  
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">1.0</p>
                    <svg className="w-5 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-[6%] h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                  </div>
                </div>
                <Link href={'/recipy'}>
                <button type="button" className="w-full mt-8 px-4 py-2 bg-gray-700 border-2 border-gray-800 text-white font-bold rounded">Go Back</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Page;
  