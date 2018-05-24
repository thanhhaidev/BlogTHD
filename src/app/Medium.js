import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import axios from "axios";

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    axios.get(
      `https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@aaron.klaser`
    );
  setPosts = response => {
    this.setState({
      posts: response
    });
  };

  render() {
    return (
      <div>
        <PageHeader color="is-dark" title="Medium">
          Medium is where I ramble and rant and tell stories. I orginally was
          going to use it as a coding blog, I don't like having to use Gist for
          all my code snippets. So I created this site.
          <br />
          <br />
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@aaron.klaser"
            target="_blank"
          >
            View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
              <i className="fab fa-lg fa-medium" />
            </span>
          </a>
        </PageHeader>
        <PageContent>
          <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
        </PageContent>
      </div>
    );
  }
}

export default Medium;
