import React from "react"
import styles from "./header.module.css"

// Components
import Nav from "../nav"

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>Murray Adcock</h1>
			<Nav />
		</header>
	)
}

export default Header
