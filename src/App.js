import "./App.css";
import Navbar from "./Components/Header/Navbar/index";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import MyLib from "./Components/MyLib";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import BookDetails from "./Components/Books/BookList/BookDetail";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Reader from "./Components/MyLib/ReadBook";
function App() {
  return (
    <main className=" bg-bgPrimary  ">
      <div className="flex  w-full">
        <div class="flex flex-col justify-between h-screen bg-bgSecondary shadow-lg w-1/5  fixed">
          <Sidebar />
        </div>

        <section className="ml-[317px]  w-4/5 ">
          <div className="  p-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/categories" element={<Categories />} />
              <Route
                exact
                path="/my-library/book/read/:id"
                element={<Reader />}
              />
              <Route path="/book/:bookId" element={<BookDetails />} />
              <Route path="/profile/my-library" element={<MyLib />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile/logout" element={<MyLib />} />
            </Routes>
          </div>
          <div className="p-12">
            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
