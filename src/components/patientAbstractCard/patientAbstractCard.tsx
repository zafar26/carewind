import React from 'react';
import { IonCard, IonItem, IonThumbnail, IonLabel, IonIcon } from "@ionic/react";
import './patientAbstractCard.css';
import { chevronForward } from 'ionicons/icons'

interface PatientAbstractCardProps {
    patientName: string;
    patientAge: number;
    patientPic: string;
}

const PatientAbstractCard: React.FC<PatientAbstractCardProps> = (props) => {

    const { patientName, patientAge, patientPic } = props;

    return (

        <IonItem lines="none" onClick={() => { console.log("Clicked Card") }}>
            <IonThumbnail slot="start">
                <img src={patientPic} alt="patient avatar" className="patientPic" />
            </IonThumbnail>
            <IonLabel>
                <h3>{patientName}</h3>
                <p>{patientAge} years old</p>
            </IonLabel>            
        </IonItem>

    )
};

export default PatientAbstractCard;