import React ,{useContext}from 'react';
import Images from '../components/photos'
import {Context} from '../context'
import {getClass} from '../utils/getclass'
function Photos() {
  /*const { allPhotos } = useContext(Context)
  const imageElements=allphotos.map((img,i)=>(
    <Images key={img.id} img={img} className={getClass(i)}/>
  ))*/
  return (
    <main className="photos">
  
    </main>
  );
}

export default Photos;
