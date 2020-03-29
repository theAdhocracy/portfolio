import React from "react"
import { Link } from "gatsby"

// Components
import Header from "../Components/Header"

// Assets
import profilePhoto from "../assets/murray-profile-square.jpg"

const IndexPage = () => {
	return (
		<>
			<Header accentColour="#bcd9ea" />
			<main className="landing">
				<img src={profilePhoto} alt="Murray Adcock" />
				<section className="about-me">
					<h2>Hi, I'm Murray 👋</h2>
					<p>
						I'm a <em>front-end developer</em>, <em>copywriter</em>, and{" "}
						<em>content creator</em> living in South West London.
					</p>
					<p>In other words, I make things. Want to see what I've made?</p>
				</section>
				<Link className="explore">Explore my portfolio</Link>
			</main>
			<footer></footer>
		</>
	)
}

export default IndexPage
