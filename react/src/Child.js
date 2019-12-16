import React from 'react';
import {useParams} from 'react-router-dom'
function Child(){
  const {id} = useParams();
  return(
    <div>
      {id}
    </div>
  )
}

export default Child;