import React, { Component } from "react";
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { Link, hashHistory } from "react-router"


class SongCreate extends Component {

  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    }).then(() => {
      hashHistory.push('/')
    })
  }

  render() {
    return (
      <div>
        <Link to="/" className="text-blue">
          Back
        </Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label >Input the new song name</label>
          <input onChange={event => this.setState({ title: event.target.value })} value={this.state.title} type={'text'}></input>
        </form>
      </div>
    )
  }
}

const mutation = gql`
mutation AddSong($title: String){
  addSong(title:$title){
    id
    title
  }
}
`

export default graphql(mutation)(SongCreate)