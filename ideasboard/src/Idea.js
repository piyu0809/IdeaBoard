import React, { Component } from 'react'

class Idea extends Component {


  componentDidMount(){
    console.log(this.props.idea);

  }
  render(){
    let title = this.props.title;
    if(title === ""){
      console.log("...");
      return(
        <div className="tile">
        </div>
      )
    }
    return(
      <div className="tile">
        <h4>{this.props.idea.title}</h4>
        <p>{this.props.idea.body}</p>
      </div>
    );
  }
}


export default Idea;
