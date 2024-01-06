import React from 'react'

const Form = (props) => {
   return(
     <form onSubmit={props.getRepos}>
        <input type='text' name='user' placeholder='GitHub User Name'/>
        <button>Git Repos</button>
     </form>
   )
}

export default Form;