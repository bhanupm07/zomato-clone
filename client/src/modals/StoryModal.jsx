import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const StoryModal = ({ isProfileModalVisible, setIsProfileModalVisible }) => {
  const [category, setCategory] = useState("");
  const [slides, setSlides] = useState([
    { heading: "", image: "", description: "" },
    { heading: "", image: "", description: "" },
    { heading: "", image: "", description: "" },
  ]);
  const [activeSlide, setActiveSlide] = useState(1);
  const [slideDetails, setSlideDetails] = useState({
    heading: slides[activeSlide - 1]?.heading,
    image: slides[activeSlide - 1]?.image,
    description: slides[activeSlide - 1]?.description,
  });

  useEffect(() => {
    setSlideDetails({
      heading: slides[activeSlide - 1]?.heading,
      image: slides[activeSlide - 1]?.image,
      description: slides[activeSlide - 1]?.description,
    });
  }, [activeSlide, slides]);

  const handleSlideClick = (index) => {
    setActiveSlide(index + 1);
  };

  const handleSlideCrossClick = (index) => {
    if (slides.length > 3) {
      // const array = [...slides];
      // array.splice(index, 1);
      // setSlides(array);
      setSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        updatedSlides.splice(index, 1);
        return updatedSlides;
      });

      setActiveSlide(1);
    } else {
      console.log("You need to have atleast 3 slides.");
    }
  };

  const slidesJsx = slides.map((slide, index) => {
    return (
      <div
        onClick={() => handleSlideClick(index)}
        className={`relative shadow-lg rounded-lg text-center py-5 flex-grow cursor-pointer ${
          activeSlide === index + 1 ? "border-2 border-blue-400" : "border"
        }`}
      >
        <span className={`font-bold`}>Slide {index + 1}</span>
        {activeSlide === index + 1 && (
          <AiOutlineCloseCircle
            onClick={() => handleSlideCrossClick(index)}
            className="text-red-500 absolute top-1 right-1 text-xl"
          />
        )}
      </div>
    );
  });

  const handleAddButton = () => {
    setSlides([...slides, { heading: "", image: "", description: "" }]);
  };

  const handleHeadingChange = (e) => {
    const arr = [...slides];
    arr[activeSlide - 1].heading = e.target.value;
    setSlides(arr);
  };

  const handleDescriptionChange = (e) => {
    const arr = [...slides];
    arr[activeSlide - 1].description = e.target.value;
    setSlides(arr);
  };

  const handleImageChange = (e) => {
    const arr = [...slides];
    arr[activeSlide - 1].image = e.target.value;
    setSlides(arr);
  };

  const handlePreviousButton = () => {
    if (activeSlide > 1) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (activeSlide < slides.length) {
      setActiveSlide((prev) => prev + 1);
    }
  };

  return (
    <main className="fixed inset-0 bg-black/90 flex justify-center items-center">
      <div className="relative bg-white rounded-2xl p-8 py-16 w-[50%] flex flex-col items-center gap-8">
        <AiOutlineCloseCircle
          onClick={() => setIsProfileModalVisible(!isProfileModalVisible)}
          className="text-red-500 absolute top-4 right-4 text-5xl cursor-pointer"
        />

        <section className="w-full flex justify-between items-center gap-4">
          {slidesJsx}
          {slides.length < 6 && (
            <div
              onClick={handleAddButton}
              className={`py-5 border flex-grow text-center shadow-lg rounded-lg font-bold cursor-pointer`}
            >
              Add +
            </div>
          )}
        </section>

        <section className="flex flex-col gap-4 w-2/3">
          <div className="flex items-center">
            <span className="text-xl font-bold w-1/2">Heading:</span>
            <input
              type="text"
              value={slides[activeSlide - 1]?.heading}
              onChange={handleHeadingChange}
              placeholder="Your heading"
              className="w-1/2 p-2 outline-black border-2 border-gray-500 text-gray-500 font-semibold"
            />
          </div>

          <div className="flex justify-around items-center">
            <span className="text-xl font-bold w-1/2">Description:</span>
            <textarea
              value={slides[activeSlide - 1]?.description}
              onChange={handleDescriptionChange}
              className="w-1/2 p-2 outline-black border-2 border-gray-500 text-gray-500 font-semibold"
              placeholder="Story description"
            ></textarea>
          </div>

          <div className="flex justify-around items-center">
            <span className="text-xl font-bold w-1/2">Image:</span>
            <input
              type="text"
              placeholder="Add image uri"
              value={slides[activeSlide - 1]?.image}
              onChange={handleImageChange}
              className="w-1/2 p-2 outline-black border-2 border-gray-500 text-gray-500 font-semibold"
            />
          </div>

          <div className="flex justify-around items-center">
            <span className="text-xl font-bold w-1/2">Category:</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-1/2 p-2 outline-black border-2 border-gray-500 text-gray-500 font-semibold"
            >
              <option value="">Select</option>
              <option value="education">Education</option>
              <option value="fashion">Fashion</option>
              <option value="fitness">Fitness</option>
              <option value="food">Food</option>
              <option value="movie">Movie</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="travel">Travel</option>
            </select>
          </div>
        </section>

        <section className="w-full text-white text-xl font-semibold flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePreviousButton}
              className="bg-green-400 w-36 rounded-3xl py-2"
            >
              Previous
            </button>
            <button
              onClick={handleNextButton}
              className="bg-blue-400 w-36 rounded-3xl py-2"
            >
              Next
            </button>
          </div>
          <button className="bg-red-400 w-36 rounded-3xl py-2">Post</button>
        </section>
      </div>
    </main>
  );
};

export default StoryModal;
