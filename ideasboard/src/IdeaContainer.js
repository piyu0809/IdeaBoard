import React, { Component } from 'react'
import {ideas} from './ConstIdeas'


class IdeaContainer extends Component {

constructor(props){
  super(props);

  this.state = {
    ideasarray: []
  };
}

componentDidMount(){
console.log(ideas);
this.setState({
  ideasarray: ideas
})

}

  render(){
    return(
      <div>
        {this.state.ideasarray.map((idea) => {
          return(
            <div className="tile" key={idea.id}>
              <h4>{idea.title}</h4>
              <p>{idea.body}</p>
            </div>
          )
        } )}
      </div>
    );
  }
}


export default IdeaContainer;
