import React, { Component } from 'react'
import {ideas} from './ConstIdeas'


class IdeaForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    };
  }

  handleInput = (e) => {
    console.log("handleInput");
    this.setState({
      [e.target.name]: e.target.value
    })}
  handleBlur = () => {
    console.log("handleBlur");
    const idea = {id: this.props.id , title: this.state.title , body: this.state.body};
    console.log(idea);
    ideas.push(idea);
  }

  render(){
    return(
      <div className="tile">
        <form>
          <input className='input' type="text" name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput} onBlur={this.handleBlur} />
          <textarea className='input' name="body" placeholder='Describe your idea'
            value={this.state.body} onChange={this.handleInput} onBlur={this.handleBlur}></textarea>
        </form>
      </div>
    );
  }
}

export default IdeaForm;
