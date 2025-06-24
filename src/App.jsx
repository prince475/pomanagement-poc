// src/App.jsx
import Navbar from "./components/Navbar";
import DashboardMain from "./components/DashboardMain";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <DashboardMain />
        <Footer/>
      </main>
    </>
  );
}
