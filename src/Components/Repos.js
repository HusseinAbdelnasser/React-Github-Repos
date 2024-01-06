import React from 'react';

const Repos = (props) => {
   return(
     <div >
         <p className='repo-box'>{props.repoName}</p>
         <p>{props.error}</p>
     </div>
   )
}

export default Repos;