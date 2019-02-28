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
    editingIdeaId: null,
    title: '',
    body: ''
  };
}

componentDidMount(){
console.log(ideas);
this.setState({
  ideasarray: ideas
})
}
handleInput = (e) => {
  console.log("handleInput");
  this.setState({
    [e.target.name]: e.target.value
  })}
handleBlur = () => {
  console.log("handleBlur");
  const idea = {id: this.state.num , title: this.state.title , body: this.state.body};
  console.log(idea);

  if(idea["title"] !== '' && idea["body"] !== ''){
      console.log("idea pushed to array");
      ideas.push(idea);
  }

  //ideas = [...ideas, idea];
  this.setState({
    ideasarray: ideas
  })
  
  console.log(ideas);
}

addNewIdea=() => {
  var obj = {};
  var num1 = (this.state.num) + 1;
  obj["id"] = num1;
  obj["title"] = '';
  obj["body"] = '';
  ideas.push(obj);
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
              <div className="tile">
                <form >
                  <input className='input' type="text" name="title" placeholder='Enter a Title'
                    value={this.state.title} onChange={this.handleInput}  />
                  <textarea className='input' name="body" placeholder='Describe your idea'
                    value={this.state.body} onChange={this.handleInput} onBlur={this.handleBlur} ></textarea>
                </form >
              </div>            )
          }
          else {
            if(idea.title === '' && idea.body === ''){
              return(
                <div>
                </div>
              )
            }
          else {
            return(
            <Idea idea={idea} key={idea.id}  />
              )
            }
          }
        }
    )}
      </div>
    );
  }
}


export default IdeaContainer;
