import React, {useState} from 'react';

export default function Box(props) {
  const [col, setCol] = useState(props.on);

  const styles = {
    background: col ? 'black' : 'transparent',
    border: props.color === 'white' ? ' 3px solid white' : '3px solid black',
    width: '100px',
    height: '100px',
    margin: '5px 10px',
    display: 'inline-block',
  };
  function toggle() {
    setCol(prevOn => !prevOn);
  }
  // return <div style={styles} onClick={props.id}></div>;
  return <div style={styles} onClick={toggle}></div>;
}
