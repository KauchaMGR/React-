import React from 'react'


function Alert(props) {
  const setUpper=(str)=>{
    let st=str.toLowerCase();
    let ch=st.charAt(0).toUpperCase()+st.slice(1);
    return ch;

  }
  return (
    props.alert && <div>
    <div className={` alert alert-${props.alert.ty} alert-dismissible fade show `}role="alert">
        <strong> {setUpper(props.alert.ty)}</strong> : {props.alert.msg}
  
</div>
    </div>
  )
}

export default Alert
