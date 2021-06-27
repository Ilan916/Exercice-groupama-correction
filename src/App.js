import React, { useState, useEffect } from 'react';
import './App.css'
import img from './image.jpg'
import Text from './components/Text'
import BtnTest from './components/Button'
import Titre from './components/Title'
import ApiData from './api.json'


function App() {
  
  const Title = ApiData[0].title ;
  const SubTitle = ApiData[0].subtitle ;
  const Texte = ApiData[0].content ;
  const Alt = ['Image Chevron', 'Banner'];
  
  const initialCount = () => Number(window.localStorage.getItem('count'));
  const [count, setCount] = useState(initialCount);

  const initialColor = () => window.localStorage.getItem('color');
  const [color, setColor] = useState(initialColor);

  var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
  
  const ChangeColorText = () => {
    setCount(count + 1 )
    setColor(randomColor)
  }

  useEffect(() => {
    window.localStorage.setItem('count', count);
    window.localStorage.setItem('color', color);
  })
        
  return (
    <div className="BoxCard">
        <img className="ImgBanner" alt={Alt[1]}  src={img} />
         <div className="Text_container">
           <Titre
             color={color}
             content={Title}
           />
           <Text
             subtitle={SubTitle}
             texte={Texte}
           />
         </div>
         <div className="Increment_container">
           <span className="counterEx" style={{display: count <= 0 ? 'none' : 'block' }} >{count}</span>
          <BtnTest
             PlusUn={ChangeColorText}
             nbrUn={count}
             altText={Alt[0]}
           /> 
         </div>
       </div>
  );
}

export default App;

