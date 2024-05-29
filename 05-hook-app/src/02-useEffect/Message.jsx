import { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setcoords] = useState({x:0, y:0});

    useEffect(() => {
        const onMouseMove = ({x,y}) => {
           setcoords({x,y});
        }
      //console.log('Message mounted');
        window.addEventListener('mousemove', onMouseMove);
      return () => {
        //console.log('Message unmounted');
        //window.removeEventListener('mousemove', onMouseMove);
      }

    }, [])
    


  return (
    <>
    <h3>User already exists</h3>
    {JSON.stringify(coords)}
    </>
  )
}
