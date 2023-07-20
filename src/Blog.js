import axios from "axios";
import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./Styles/addblog.css";

let server_url = "http://localhost:8000/blog/";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = false;

// Getting all blogposts from backend
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

// post request ot bakcend to add a blogpost
export const AddBlogpost = (props) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    text: "",
  });

  const isValid = Object.values(data).every(value => value.length > 0);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      title: data.title,
      subtitle: data.subtitle,
      text: data.text,
    };
    axios.post(server_url, userData).then((response) => {
      console.log(response.status, response.data.token);
    });

    if (isValid) {
      // put your actual code here instead.
      alert("submit success");
    }
  
    setData({
      title: '',
      subtitle: "",
      text: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="title" name="title" value={data.title} onChange={handleChange} />
        </label>
        <label htmlFor="subtitle">
          Subtitle
          <input type="subtitle" name="subtitle" value={data.subtitle} onChange={handleChange} />
        </label>
        <label htmlFor="text">
          Text
          <input type="text" name="text" value={data.text} onChange={handleChange} />
        </label>
        <button type="submit"   disabled={!isValid} >Submit</button>
      </form>
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
        <div>
          <h1> Add a new post!</h1>
          <AddBlogpost />
        </div>

        <div>
          {this.state.details.map((output, id) => (
            <Blogpost output={output} id={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
