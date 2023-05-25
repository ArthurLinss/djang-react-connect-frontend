import { VideoYoutube } from "./Video.js";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaUserPlus } from "react-icons/fa";

export const Event = (props) => {
  const { output } = props;
  const { id } = props;

  let color1 = "#0f283a"; // #ffd700";
  let color2 = "#dbebf5"; // "#0057B7";
  let color_black = "#000000";
  let color_white = "#ffffff";

  if (output.typ == "Event") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: color2, color: color1 }}
        //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={output.date}
        layout={"3-columns"}
        iconStyle={{ background: color2, color: color1 }}
        icon={<FaUserPlus />}
        //position="left"
      >
        <h2 className="vertical-timeline-element-title" style={{ float: "right" }}>
          {" "}
          {output.date}{" "}
        </h2>

        <h3 className="vertical-timeline-element-title"> {output.title} </h3>
        <h4 className="vertical-timeline-element-subtitle"> {output.subtitle}</h4>
        <p>{output.body}</p>
        <VideoYoutube url={output.video_link} />
        <VideoYoutube url={output.video_link2} />
      </VerticalTimelineElement>
    );
  }
  if (output.typ == "Quote") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: color_black, color: color_white }}
        date={output.date}
        layout={"3-columns"}
        iconStyle={{ background: color_black, color: color_white }}
        icon={<FaUserPlus />}
        //position="left"
      >
        <p>{output.body}</p>
      </VerticalTimelineElement>
    );
  }
};
