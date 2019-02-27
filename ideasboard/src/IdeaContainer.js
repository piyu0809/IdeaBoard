import React, { Component } from 'react'
import {ideas} from './ConstIdeas'
import Idea from './Idea.js'
import IdeaForm from './IdeaForm'


class IdeaContainer extends Component {

constructor(props){
  super(props);

  this.state = {
    ideasarray: [],
    isediting: false,
    num: 100,
    editingIdeaId: null
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
  var num1 = (this.state.num) + 1;
  obj["id"] = num1;
  obj["title"] = '';
  obj["body"] = '';

  ideas.push(obj)
  this.setState({
    ideasarray: ideas,
    num: num1,
    editingIdeaId: obj.id

  })

}
  render(){
    return(
      <div className="container">
        <button className="newideabutton" onClick={this.addNewIdea}>
          New Idea
        </button>
        {this.state.ideasarray.map((idea) => {
          if(this.state.editingIdeaId === idea.id) {
            return(
              <IdeaForm idea={idea} key={idea.id} id={this.state.num} />
            )
          }
          else {
          return(
            <Idea idea={idea} key={idea.id}  />
          )
        }
        } )}
      </div>
    );
  }
}


export default IdeaContainer;
