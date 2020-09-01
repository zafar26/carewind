import React from 'react';
import { IonIcon, IonButton, IonText } from "@ionic/react";
import { closeOutline, videocam } from 'ionicons/icons'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './index.scss'

dayjs.extend(relativeTime)

interface OBJECT {
    label: string,
    icon: string,
    color: string
}

interface BUTTON {
    [key: string]: OBJECT,
}

const object_button: BUTTON = {
    start: {
        label: "Start In",
        icon: videocam,
        color: "primary"
    },
    cancel: {
        label: "Cancel Booking",
        icon: closeOutline,
        color: "danger"
    }
}


const Button = (props: { type: string; time?: string; }) => {

    const onClick = (e: any) => {
        console.log(e)
    }
    const onDelete = (e: any) => {
        console.log(e)
    }
    let type = object_button[props.type]
    let icon = type['icon'];
    let label = type['label'];
    let color = type['color']

    return (
        <IonButton size="small" color={color} //disabled={props.type === 'start' ? true :false  } 
            onClick={onClick} >
            <IonIcon icon={icon} />
            <IonText><p>{props.type === 'start' ? `${label} ${props.time}` : label}</p></IonText>
        </IonButton>
    )
}

export default Button;