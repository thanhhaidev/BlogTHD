import React, { Component } from "react";
import * as contentful from "contentful";
import BlogItem from "./blog/BlogItem";
import PageHeader from "../components/PageHeader";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  client = contentful.createClient({
    space: "7vbtzj7i5icm",
    accessToken:
      "69656dae0bf5fe7e4f5365294aa3a4ebb89734c217961d3a802249557168ea92"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit,
          probably not very good, but I will at least try to keep it
          entertaining. This blog is a chronological mix of random posts on
          Angular, React, Functional Programming, and my{" "}
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields}>
            {JSON.stringify(fields, null, 2)}
          </BlogItem>
        ))}
      </div>
    );
  }
}

export default Blog;
