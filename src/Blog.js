import axios from "axios";
import React from "react";
import Card from "react-bootstrap/Card";
let server_url = "http://localhost:8000/blog/";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = false



export const Blogpost = (props) => {
  const { output } = props;
  const { id } = props;
  return (
    <div>
      <div>
        <p></p>
      </div>
      <Card class="card bg-light border-dark mb-3">
        {/* <Card.Img className="BeerListItem-img" variant="top" src={logo} /> */}
        <Card.Body>
          <Card.Title>{output.title} </Card.Title>
          <Card.Text>
            <div class="card-text">
              <b> {output.text} </b>{" "}
            </div>
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <div>
        <p></p>
      </div>
    </div>
  );
};

class Blog extends React.Component {
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
      <div>
        {this.state.details.map((output, id) => (
          <Blogpost output={output} id={id} />
        ))}
      </div>
    );
  }
}

export default Blog;
