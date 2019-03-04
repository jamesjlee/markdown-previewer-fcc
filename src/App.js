import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MarkDownPreviewer from "./components/MarkDownPreviewer";

class App extends Component {
  state = {
    editorText:
      "#### Headings: \n### SoundSpot \n ## SoundSpot \n# SoundSpot \n #### Hyperlink: \n[SoundSpot](https://sound-spot.herokuapp.com/) \n#### Code block: \n`\nlet soundSpot = true;\n`\n```\nlet soundSpot=true;\n```\n- SoundSpot\n- SoundSpot\n\n\n> SoundSpot\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n **SoundSpot**"
  };

  handleMarkdownPreviewerChangeInApp = (e) => {
    this.setState({
      editorText: e.target.value
    });
  };

  render() {
    return (
      <MarkDownPreviewer
        editorText={this.state.editorText}
        handleMarkdownPreviewerChangeInApp={
          this.handleMarkdownPreviewerChangeInApp
        }
      />
    );
  }
}

export default App;
