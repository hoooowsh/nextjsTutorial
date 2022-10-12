// This file is main navbar on the top
import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sheng's blog</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/technical">Tech</Link>
          </li>
          <li>
            <Link href="/leetcode">Leetcode</Link>
          </li>
          <li>
            <Link href="/journey">Journey</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
