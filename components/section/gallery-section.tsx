import Image from "next/image";
import Masonry from "react-masonry-css";
import galleryData from "../data/gallery-data";

const GallerySection = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 1,
    500: 1,
  };
  const masonryOptions = {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
  };
  return (
    <section id="gallery" className="p-32">
      <div className="max-w-[1220px] mx-auto">
        <h2 className="font-bold text-black text-5xl text-center py-8">
          <span className="text-orange">Gallery</span> of our memories
        </h2>
        <Masonry {...masonryOptions}>
          {galleryData.map(({ src }, key) => (
            <div className="w-full" key={key}>
              <img
                src={src}
                alt={src}
                key={key}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default GallerySection;
