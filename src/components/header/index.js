import React from "react"
import styles from "./header.module.css"

// Components
import Nav from "../nav"

// Assets

const Header = ({ logomarkColour }) => {
	return (
		<header className={styles.header}>
			<svg
				style={{ "--logomark-colour": `${logomarkColour}` }}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 216.35 216.07"
			>
				<polygon points="108.35 0 0.35 216 72.35 216 108.35 153 144.35 216 216.35 216 108.35 0" />
				<polygon points="95.35 216.07 121.36 216.07 108.35 193.31 95.35 216.07" />
				<polygon points="57.31 57.37 0 0.07 0 171.98 57.31 57.37" />
				<polygon points="144.26 71.81 108 108.07 72.21 72.28 0.35 216 72.35 216 108.35 153 144.35 216 216 216 216 215.29 144.26 71.81" />
				<polygon points="216 170.57 216 0.07 159.16 56.9 216 170.57" />
			</svg>
			<Nav />
		</header>
	)
}

export default Header
