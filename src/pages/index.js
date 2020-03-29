import React from "react"
import { Link } from "gatsby"

// Components
import Header from "../Components/Header"

export default () => (
	<>
		<Header />
		<main>
			<h2>Hi, I'm Murray 👋</h2>
			<p>
				I'm a front-end developer, copywriter, and content creator living in
				South West London.
			</p>
			<p>In other words, I make things. Want to see what I've made?</p>
			<Link>Explore my portfolio</Link>
		</main>
		<footer></footer>
	</>
)
