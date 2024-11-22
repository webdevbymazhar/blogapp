import Blogs from "./components/Blogs/Blogs";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <h1>Blog App</h1> */}
     <Blogs/>
    </div>
  );
}
