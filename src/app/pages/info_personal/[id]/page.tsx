import Profile from '@/components/Profile';
import React from 'react'

const Infoformation = ({params}:{params: string}) => {
 const id : string = params.id;
 
  console.log(id);
  return (
    <div>
      <Profile id={id}  />
    </div>
  )
}

export default Infoformation