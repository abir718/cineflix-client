import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Featuredmovies from "./Featuredmovies";
import Others from "./Others";
import Slide from "./Slide";

const Homecontent = () => {
  const featuredMovies = useLoaderData();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.style.backgroundColor = savedTheme === "dark" ? "#1b1b1b" : "#ffffff";
      document.documentElement.style.color = savedTheme === "dark" ? "#ffffff" : "#000000";
    } else {
      document.documentElement.style.backgroundColor = "#1b1b1b";
      document.documentElement.style.color = "#ffffff";
    }
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.style.backgroundColor = newTheme === "dark" ? "#1b1b1b" : "#ffffff";
    document.documentElement.style.color = newTheme === "dark" ? "#ffffff" : "#000000";
  };

  return (
    <div>
      <div className="flex justify-end p-4">
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "light"}
            onChange={handleThemeChange}
          />
        </label>
      </div>

      <Slide theme={theme} />
      <div className="mx-auto w-[80%] flex gap-3 items-center">
        <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
        <p className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
          Featured Movies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-6 w-[80%] mx-auto">
        {featuredMovies.map((movie) => (
          <Featuredmovies key={movie._id} featuredMovies={movie} theme={theme}></Featuredmovies>
        ))}
      </div>

      <Others theme={theme} />
    </div>
  );
};

export default Homecontent;
