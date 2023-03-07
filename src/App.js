import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import BookDetails from "./Components/Books/BookList/BookDetail";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MyLib from "./Components/MyLib";
import Reader from "./Components/MyLib/ReadBook";
import Search from "./Components/Search/Search";
import Sidebar from "./Components/Sidebar";
import Wishlist from "./Components/Wishlist/Wishlist";
function App() {
  return (
    <main className=" bg-bgPrimary  relative">
      <div className="flex  w-full">
        <div class="flex flex-col justify-between h-screen bg-bgSecondary shadow-sm w-1/5  fixed">
          <Sidebar />
        </div>

        <section className="ml-[317px]  w-4/5 ">
          <div className="  p-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/wishlist" element={<Wishlist />} />
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
