import axios from "axios";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {Event} from "./Event.js"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 


let color1 = "#0f283a"; // #ffd700";
let server_url = "http://localhost:8000"

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get(server_url)
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: color1,
        }}
      >
        <div>
          <VerticalTimeline>
            {this.state.details.map((output, id) => (
              <Event output={output} id={id} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default App;

