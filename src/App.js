import axios from 'axios';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserPlus } from "react-icons/fa";


let color1 = '#ffd700';
let color2 = '#0057B7';

class App extends React.Component {

    state = { details: [], }

    componentDidMount() 
    {
        let data;
        axios.get("http://localhost:8000")
        .then(res => {
            data = res.data;
            this.setState({
                details: data
            });
        })
        .catch(err => { })
    }
          

    render() 
    {

        return (
            <div       
                style={{
                    backgroundColor: color1,
                }}>
                    
                <div>
                <VerticalTimeline>
                    {this.state.details.map((output, id) => (
                                <Event output={output} id={id} />
                        ))}
                </VerticalTimeline>
                </div>
            </div>
            )
    }
}

export default App;

const Event = (props) => {
    const { output } = props;
    const { id } = props;
    return (
        <VerticalTimelineElement
                                    className="vertical-timeline-element"
                                    contentStyle={{ background: color2, color: color1}}
                                    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date= {output.date}  
                                    layout = {'3-columns'}
                                    iconStyle={{ background: color2, color: color1 }}
                                    icon={<FaUserPlus />}
                                    //position="left"
                                >
                                    
                                    <h3 className="vertical-timeline-element-title">  {output.title}  </h3>
                                    <h4 className="vertical-timeline-element-subtitle"> {output.subtitle}</h4>
                                    <p>
                                    {output.body} 
                                    </p>
                                    <iframe 
                                    src={output.info_link}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    />                              
                                    
                                </VerticalTimelineElement>
    );
  };