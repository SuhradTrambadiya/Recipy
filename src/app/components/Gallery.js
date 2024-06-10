import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

const Gallery = ({ itemData }) => {
  return (
    <div
      className="w-full h-full bg-gray-900 p-4 overflow-hidden"
      style={{ scrollbarWidth: "none" }}
    >
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {itemData.map((item, index) => (
          <div key={index} className="relative overflow-hidden group">
            <Image
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.cuisine}
              width={256}
              height={256}
              className="object-cover w-full h-60 md:h-80 lg:h-96 transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <p className="text-white text-center font-bold">{item.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
