<<<<<<< HEAD
import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark",
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
=======
import { useEffect, useState } from 'react';
import './header.css';

export default function Header() {

  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove('dark');
      document.body.classList.add("light");
    } else {
      document.body.classList.remove('light');
>>>>>>> 040f84a81118715bb9eb6ebd449ee9064ee44a5d
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
<<<<<<< HEAD
    <header className="flex">
      <button
        onClick={() => setShowModel(true)}
        className="menu icon-menu flex"
      ></button>
=======
    <header className='flex'>
      <button onClick={() => setShowModel(true)} className='menu icon-menu flex'></button>
>>>>>>> 040f84a81118715bb9eb6ebd449ee9064ee44a5d

      <div />

      <nav>
<<<<<<< HEAD
        <ul className="flex">
          <li>
            <a href="#header">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
=======
        <ul className='flex'>
          <li>
            <a href="#header">About</a> {/* رابط يؤدي إلى بداية الصفحة */}
          </li>
          <li>
            <a href="#skill">Skills</a> {/* رابط يؤدي إلى بداية الصفحة */}
          </li>
          <li>
            <a href="#projects">Projects</a> {/* رابط يؤدي إلى قسم المشاريع */}
          </li>
          <li>
            <a href="#contact">Contact</a> {/* رابط يؤدي إلى قسم الاتصال */}
>>>>>>> 040f84a81118715bb9eb6ebd449ee9064ee44a5d
          </li>
        </ul>
      </nav>

<<<<<<< HEAD
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark",
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
=======
      <button onClick={() => {
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
        setTheme(localStorage.getItem("currentMode"));
      }} className='mode flex'>
        {theme === "dark" ? (
          <span className='icon-moon-o'></span>
        ) : (
          <span className='icon-sun'></span>
>>>>>>> 040f84a81118715bb9eb6ebd449ee9064ee44a5d
        )}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
<<<<<<< HEAD
              <button
                className="icon-close"
                onClick={() => setShowModel(false)}
              />
            </li>
            {/* الروابط الداخلية في الـ Model */}
            <li>
              <a href="#header">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
=======
              <button className='icon-close' onClick={() => setShowModel(false)} />
            </li>
            {/* الروابط الداخلية في الـ Model */}
            <li><a href="#header">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
>>>>>>> 040f84a81118715bb9eb6ebd449ee9064ee44a5d
          </ul>
        </div>
      )}
    </header>
  );
}
