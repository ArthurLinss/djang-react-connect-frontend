import { VideoYoutube } from "./Video.js";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaUserPlus, FaArrowDown, FaFileVideo, FaExternalLinkAlt } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "./selenski.jpeg";
import Collapsible from "react-collapsible";
import "./Event.css";

export const Event = (props) => {
  const { output } = props;
  const { id } = props;

  let color1 = "#0f283a"; // #ffd700";
  let color2 = "#dbebf5"; // "#0057B7";
  let color_black = "#000000";
  let color_white = "#ffffff";

  let videosection;
  if (output.video_link != "") {
    videosection = (
      <Collapsible trigger={["", <FaFileVideo />]}>
        <VideoYoutube url={output.video_link} />
        <VideoYoutube url={output.video_link2} />
      </Collapsible>
    );
  } else {
    videosection = <> </>;
  }

  if (output.typ == "Event") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: color2, color: color1 }}
        //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={output.date}
        layout={"3-columns"}
        iconStyle={{ background: color1, color: color2 }}
        /*  icon={<FaUserPlus />} */
        //position="left"
      >
        <h2 className="vertical-timeline-element-title" style={{ float: "right" }}>
          {" "}
          {output.date}{" "}
        </h2>

        <h3 className="vertical-timeline-element-title"> {output.title} </h3>
        <h4 className="vertical-timeline-element-subtitle"> {output.subtitle}</h4>
        <p>{output.text}</p>

        <p> </p>
        {videosection}
        <p> </p>
        <SourceCard output={output} />
      </VerticalTimelineElement>
    );
  }
  if (output.typ == "Quote") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: color2, color: color2 }}
        date={output.date}
        layout={"3-columns"}
        iconStyle={{ background: color2, color: color2 }}
        /*  icon={<FaUserPlus />} */
        //position="left"
      >
        <QuoteCard output={output} />
      </VerticalTimelineElement>
    );
  }
};

export const QuoteCard = (props) => {
  const { output } = props;
  return (
    <Card class="card bg-light border-dark mb-3">
      {/* <Card.Img className="BeerListItem-img" variant="top" src={logo} /> */}
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
          <div class="card-text">
            <b> "{output.text}" </b>{" "}
          </div>
          </Card.Text>
        <Card.Text>
          <div class="card-text" style={{ float: "right" }}>
            <i> {output.author} </i>
          </div>
        </Card.Text>
        <Card.Text>
        <div class="card-footer text-muted  bg-transparent" style={{ float: "left" }}>
          <p> {output.context} </p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export const SourceCard = (props) => {
  const { output } = props;
  return (
    <Collapsible trigger={["", <FaExternalLinkAlt />]}>
      <Card>
        {/* <Card.Img className="BeerListItem-img" variant="top" src={logo} /> */}
        <Card.Body>
          <Card.Title> {output.sources_link} </Card.Title>
          <Card.Text>
            <div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 20 }}>
                <iframe width="560" height="315" src={output.sources_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Collapsible>
  );
};
