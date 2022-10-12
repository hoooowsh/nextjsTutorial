import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/technical">Tech</Link>
          </li>
          <li>
            <Link href="/technical/new_tech">Add New Tech</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
