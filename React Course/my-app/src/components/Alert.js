import React from 'react'

function Alert(props) {
  return (
    props.alert.ty && <div>
    <div className={` alert alert-${props.alert.ty} alert-dismissible fade show `}role="alert">
        <strong> {props.alert.ty}</strong>:{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert
