import React from "react";
// import Header from "./components/Header";
// import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends React.Component {
	state = {
		characters: characters,
		pickedCharacters: [],
		topScore: 0,
		alertMessage: ""
	};

	render() {
		const images = characters.map(characters => (
			<Main
				id={characters.id}
				image={characters.image}
				key={characters.id}
				handlePicked={this.handlePicked}
			/>
		));
		return (
			<div className="wrapper">
				<Navbar
					clickMessage={this.state.pickedCharacters}
					topScore={this.state.topScore}
					alertMessage={this.state.alertMessage}
					style={{ color: "white" }}
				/>
				<Score />
				<div className="container">
					<div className="row">{images}</div>
				</div>
			</div>
		);
	}
}

export default App;
