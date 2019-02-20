import React, { Component } from 'react'
import {ideas} from './ConstIdeas'
import Idea from './Idea.js'
import IdeaForm from './IdeaForm'


class IdeaContainer extends Component {

constructor(props){
  super(props);

  this.state = {
    ideasarray: [],
    isediting: false
  };
}

componentDidMount(){
console.log(ideas);
this.setState({
  ideasarray: ideas
})
}
addNewIdea=() => {
  var obj = {};
  obj["title"] = '';
  obj["body"] = '';
  ideas.push(obj)
  this.setState({
    ideasarray: ideas,
    isediting: true
  })

}
  render(){
    return(
      <div>
        <button className="newideabutton" onClick={this.addNewIdea}>
          New Idea
        </button>
        {this.state.ideasarray.map((idea) => {
          if(this.state.isediting === true) {
            return(
              <IdeaForm idea={idea} />
            )
          }
          else {
          return(
            <Idea idea={idea}  />
          )
        }
        } )}
      </div>
    );
  }
}


export default IdeaContainer;
