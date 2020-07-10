import React from 'react';
import { IonIcon,  IonButton } from "@ionic/react";
import { closeOutline, videocam } from 'ionicons/icons'



const object_button = {
  start: {
    label: "Start in",
    icon: videocam,
  },
  cancel:{
    label: "Cancel Booking",
    icon: closeOutline,
  },
  undefined:{
    label: "Nothing",
    icon: "no"
  }
}


const Nothing = ({ children, ...props }) => {
  // console.log(children,"children",props, "props")
  const onClick=(e)=>{
    console.log(e)
  }
  const onDelete=(e)=>{
    console.log(e)
  }
  let icon = object_button[props.type]['icon'];
  let label = object_button[props.type]['label'];
  return (
      <IonButton onClick={onClick}>
        <IonIcon icon={icon}/>
        {label}
      </IonButton>
  )
}

export default Nothing;