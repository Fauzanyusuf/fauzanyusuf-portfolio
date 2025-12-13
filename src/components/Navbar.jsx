import { navIcons, navLinks } from "@data";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

function Navbar() {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("ddd MMM D h:mm:ss A")
  );

  const navlink = () => {
    return navLinks.map(({ id, name }) => <li key={id}>{name}</li>);
  };

  const navIcon = () => {
    return navIcons.map(({ id, img }) => (
      <li key={id}>
        <img src={img} className="icon-hover" alt={`icon-${img}`} />
      </li>
    ));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("ddd MMM D h:mm:ss A"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Fauzan Yusuf's Portfolio</p>
        <ul>{navlink()}</ul>
      </div>
      <div>
        <ul>{navIcon()}</ul>
        <time>{currentTime}</time>
      </div>
    </nav>
  );
}

export default Navbar;
