import React from "react"
import { Link } from "gatsby"
import styles from "./nav.module.css"

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link>Coding</Link>
				</li>
				<li>
					<Link>Creative</Link>
				</li>
				<li>
					<Link>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
