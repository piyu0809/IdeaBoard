import React, { Component } from 'react'


class IdeaForm extends Component {
  render(){
    return(
      <div className="tile">
        <form>
          <input className='input' type="text" name="title" placeholder='Enter a Title' />
          <textarea className='input' name="body" placeholder='Describe your idea'></textarea>
        </form>
      </div>
    );
  }
}

export default IdeaForm;
