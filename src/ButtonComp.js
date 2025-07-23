import { useState} from 'react';

function ButtonComp (props ) {
    const handleChange =(e) => {
        console.log(e);
        const value = e.target.textContent;
     
        props.sendDataToParent(value.trim());
    }

    if(props.condition==="xy"){
    return( 
    <div style={styles.bCon}>
        <button style= {styles.btnNum} onClick={handleChange}  > {props.no}</button>
    </div>);
    }
    else {
        return( 
    <div style={styles.bCon2}>
        <button style= {styles.btnNum2} onClick={handleChange}> {props.no}</button>
    </div>);
    }
    }

const styles = {
    bCon: {
        border: '2px',
         width: 'calc(10% + 50px)',
        display: 'flex',
        justifyContent: 'center'

    },
    bCon2: {
        border: '4px',
         width: 'calc(10% + 50px)',
        display: 'flex',
        justifyContent: 'center',
        height: 'calc(15% + 45px)'

    },
    btnNum : {
       width:'calc(10% + 50px)',
        margin: '2%',
        fontSize: '150%'
    },
    btnNum2 : {
       
     width:'calc(10% + 50px)',
        margin: '2%',
        fontSize: '150%',
        height: 'calc(36% + 50px)'
    }

}

 ;
export default ButtonComp;