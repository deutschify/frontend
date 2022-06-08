import "../App.scss";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const sliderData = [
    {
        slideImage:
            "https://images.unsplash.com/photo-1529203915787-cc54fa70a428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

        title: "Language Levels",
    },
    {
        slideImage:
            "https://images.unsplash.com/photo-1604187350703-6de3b495f2fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",

        title: "Dictionary",
    },
    {
        slideImage:
            "https://images.unsplash.com/photo-1626418919868-d16399246650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",

        title: "Conversation",
    },
    {
        slideImage:
            "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        title: "Books",
    },
    {
        slideImage:
            "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        title: "Einbürgerungstest",
    },
];

const Homepage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = sliderData.length;

    const nextSlideHandler = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };
    const previousSlideHandler = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <div className="homepage slider">
            <AiOutlineArrowLeft
                className="slideshow-left-arrow"
                onClick={previousSlideHandler}
            />
            <AiOutlineArrowRight
                className="slideshow-right-arrow"
                onClick={nextSlideHandler}
            />
            {sliderData.map((slider, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === currentImage ? "slide active" : "slide"
                        }
                    >
                        {index === currentImage && (
                            <>
                                <img
                                    className="slideshow-images"
                                    src={slider.slideImage}
                                    alt="slideshow image"
                                />

                                <p className="slideshow-title">
                                    {slider.title}
                                </p>
                            </>
                        )}
                    </div>
                );
            })}

            {/* <h2>HomePage</h2>
            <img
                src="../../public/images/homepage-img.png"
                alt="homePageImage"
            /> */}
            {/* <Search />
            <ResultList />
            <Dictionary />
            <Test />
            <Routes>
                <Route path="*" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/*" element={<Login />} />
            </Routes> */}
        </div>
    );
};

export default Homepage;
