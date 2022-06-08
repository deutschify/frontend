import "../App.scss";
const Homepage = () => {
    return (
        <div className="homepage">
            <h2>HomePage</h2>
            <img
                src="../../public/images/homepage-img.png"
                alt="homePageImage"
            />
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
