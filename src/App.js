
import ButtonComp from './ButtonComp';
import './App.css';
import {React, useState} from 'react';

function App() {
 const [childData,setChildData] = useState('0');
 const handleDataFromChild = (data) => {
  //console.log(data)
 
  
  console.log(childData.length);
  console.log(childData);

  if(data.match (/[0-9]/g) ){
    console.log("it is a number");
    if(childData=='0')
    {
    setChildData(data);
    }
    else{
      setChildData(childData+data);
    }
  }
  else
  {
     switch(data){
      case "C":
      setChildData('0');
      break;
      case "X":
      setChildData(childData+'*');
      break;
      case "ON":
      if(childData.length>0){
        setChildData('');
      }
      else
      {
        setChildData('0');
      }
      
      break;
      case "=":
      try{
        setChildData(eval(childData))
      }
      catch(e){
        console.log(e);
      }
  
      break;
      default:
      setChildData(childData+data);
     }
  }
 }

  const style = {
    Appcss: {
    width: '300px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '6%'      
    }
    ,
    divs:{
    display: 'flex',
    flexWrap: 'wrap',  
    flexDirection: 'column',
    alignContent: 'center',
    gap: '10px',
    padding: '10px',
    width: '12%'
    
    }
    ,
    container: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '3%',
      border: '1px solid black',
      width:'300px',
      marginLeft: '35%',
      marginTop: '10%'

    }
    , 
    displayDiv : {
       fontFamily: "'Share Tech Mono', monospace",
  fontSize: '15px',
  color: 'hsla(0, 1%, 45%, 1.00)',
  backgroundColor: 'black',
  padding: '2px',
  borderRadius: '10px',
  margin: '10px'
    }
  }
  return (
    <div style={style.container}>

    <div style={style.displayDiv}>
     <h2>{childData}</h2>
    </div>
    <div style={style.Appcss}>
      <div style={style.divs}>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild}  no="ON"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="7"/>
        <ButtonComp condition="xy" sendDataToParent={handleDataFromChild} no="4"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="1"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="0"/>
      </div>
      <div style={style.divs}>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="C"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="8"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="5"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="2"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="."/>
      </div>
      <div style={style.divs}>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="%"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="9"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="6"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="3"/>
        <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="="/>
      </div>
      <div style={style.divs}>
      <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="/"/>
      <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="X"/>
      <ButtonComp  condition="xy" sendDataToParent={handleDataFromChild} no="-"/>
      <ButtonComp  condition="0" sendDataToParent={handleDataFromChild} no="+"/>
      </div>
    </div>
    </div>
  );
}


export default App;
