import React from "react"
import { Link } from "gatsby"

// Components
import Header from "../components/header"

// Assets
import profilePhoto from "../assets/murray-profile-square.jpg"

const IndexPage = () => {
	return (
		<>
			<Header accentColour="#bcd9ea" />
			<main>
				<div className="landing">
					<img src={profilePhoto} alt="Murray Adcock" />
					<section className="about-me">
						<h2>Hi, I'm Murray 👋</h2>
						<p>
							I'm a <em>front-end developer</em>, <em>copywriter</em>,
							and <em>content creator</em> living in South West London.
						</p>
						<p>
							In other words, I make things. Want to see what I've made?
						</p>
					</section>
				</div>
				<Link className="explore" to="#latest-coding">
					Explore my portfolio
				</Link>
				<section id="latest-coding" className="highlight">
					<h2>Coding Highlight</h2>
					<img src={profilePhoto} />
					<div className="details">
						<h3>Director Interview Bloopers</h3>
						<p>Talent Point</p>
						<p>
							Lorem ipsum dolor sit amet. Non squiret e pluribus unum et
							del latro, sunc deus amo casseus. Lorem ipsum dolor sit
							amet. Non squiret e pluribus unum et del latro, sunc deus
							amo casseus.
						</p>
						<Link>Learn more</Link>
					</div>
				</section>
				<section id="latest-creative" className="highlight">
					<h2>Creative Highlight</h2>
					<img src={profilePhoto} />
					<div className="details">
						<h3>Director Interview Bloopers</h3>
						<p>Talent Point</p>
						<p>
							Lorem ipsum dolor sit amet. Non squiret e pluribus unum et
							del latro, sunc deus amo casseus. Lorem ipsum dolor sit
							amet. Non squiret e pluribus unum et del latro, sunc deus
							amo casseus.
						</p>
						<Link>Learn more</Link>
					</div>
				</section>
			</main>
			<footer></footer>
		</>
	)
}

export default IndexPage
