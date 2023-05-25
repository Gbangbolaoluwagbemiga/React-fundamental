import React, {useState} from 'react';

export default function Box(props) {
  const styles = {
    background: props.color,
    color: 'white',
    width: '350px',
    height: '100px',
    margin: '10px',
    display: 'inline-block',
  };
  return <div style={styles}></div>;
}
