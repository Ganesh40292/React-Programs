          App.jsx

import FigureList from "./FigureList";

function App() {
  return (
    <div>
      <FigureList />
    </div>
  );
}

export default App;

        FigureList.jsx

import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css";

const initialImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", caption: "Image 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107", caption: "Image 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", caption: "Image 3" }
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = {
      id: Date.now(),
      src: `https://picsum.photos/400/300?random=${randomId}`,
      caption: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>
      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>
      <div className="gallery">
        {images.map((image) => (
          <BasicFigure
            key={image.id}
            src={image.src}
            caption={image.caption}
            onRemove={() => removeImage(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;


       BasicFigure.jsx

import PropTypes from "prop-types";

const BasicFigure = ({ src, caption, onRemove }) => {
  return (
    <div className="image-card">
      <img src={src} alt={caption} loading="lazy" />
      <div className="caption">{caption}</div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

BasicFigure.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default BasicFigure;

     FigureList.css
       
.container {
  text-align: center;
  padding: 20px;
}

.buttons {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 5px;
}

button:hover {
  background-color: darkgreen;
}

.gallery {
  width: 800px;
  height: 500px;
  border: 2px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
}


       index.css
         
.image-card {
  width: 180px;
  height: 180px;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.image-card:hover {
  transform: scale(1.05);
}

.image-card img {
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.caption {
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
