import React, { useEffect } from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

// Components
import Nav from "../nav"

// Assets

const Header = ({ accentColour }) => {
	// Set page accent colour on :root
	useEffect(() => {
		if (typeof window !== "undefined" && window.document) {
			document.documentElement.style.setProperty(
				"--page-accent",
				accentColour
			)
		}
	})

	return (
		<header className={styles.header}>
			<Link to="/">
				{/* <svg
					style={{ "--logomark-colour": `${accentColour}` }}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 216.35 216.07"
				>
					<polygon points="108.35 0 0.35 216 72.35 216 108.35 153 144.35 216 216.35 216 108.35 0" />
					<polygon points="95.35 216.07 121.36 216.07 108.35 193.31 95.35 216.07" />
					<polygon points="57.31 57.37 0 0.07 0 171.98 57.31 57.37" />
					<polygon points="144.26 71.81 108 108.07 72.21 72.28 0.35 216 72.35 216 108.35 153 144.35 216 216 216 216 215.29 144.26 71.81" />
					<polygon points="216 170.57 216 0.07 159.16 56.9 216 170.57" />
				</svg> */}
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260.02 216">
					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_1-2" data-name="Layer 1">
							<polygon points="130.36 0 22.36 216 94.36 216 130.36 153 166.36 216 238.36 216 130.36 0" />
							<polygon points="117.36 216 143.36 216 130.36 193.25 117.36 216" />
							<polygon points="79.31 57.37 22.01 0.07 0 216 79.31 57.37" />
							<polygon points="166.26 71.81 130.01 108.07 94.22 72.28 22.36 216 94.36 216 130.36 153 166.36 216 238.01 216 238.01 215.29 166.26 71.81" />
							<polygon points="180.7 57.31 238.01 0 260.02 215.93 180.7 57.31" />
						</g>
					</g>
				</svg> */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.25 216.03">
					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_1-2" data-name="Layer 1">
							<polygon points="206.25 0 98.25 216 170.25 216 206.25 153 242.25 216 314.25 216 206.25 0" />
							<polygon points="193.25 216 219.25 216 206.25 193.25 193.25 216" />
							<polygon points="242.16 71.81 205.9 108.07 170.11 72.28 98.25 216 170.25 216 206.25 153 242.25 216 313.9 216 313.9 215.29 242.16 71.81" />
							<polygon points="108 0.03 0 216.03 71 216.03 107 153.03 143 216.03 191.21 168.45 108 0.03" />
						</g>
					</g>
				</svg>
			</Link>
			<Nav />
		</header>
	)
}

export default Header
