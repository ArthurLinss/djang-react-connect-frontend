import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {Event} from "./Event.js"
import axios from "axios";
import React from "react";
let server_url = "http://localhost:8000/"


class VietnamWar extends React.Component { 
    state = { details: [] };

    componentDidMount() {
      let data;
      axios
        .get(server_url.concat("vietnamwar/"))
        .then((res) => {
          data = res.data;
          this.setState({
            details: data,
          });
        })
        .catch((err) => {});
    };

  
    render() {

        return (
        <div>
          <VerticalTimeline>
            {this.state.details.map((output, id) => (
              <Event output={output} id={id} />
            ))}
          </VerticalTimeline>
        </div>    );
            }
}

export default VietnamWar;