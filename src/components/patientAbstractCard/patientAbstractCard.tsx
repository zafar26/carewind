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
        <IonCard>
            <IonItem lines="none">
                <IonThumbnail slot="start">
                    <img src={`/assets/images/${patientPic}`} alt="patient avatar" className="patientPic" />
                </IonThumbnail>
                <IonLabel>
                    <h3>{patientName}</h3>
                    <p>{patientAge} years old</p>
                </IonLabel>
                <IonIcon icon={chevronForward} slot="end" onClick={() => { }}></IonIcon>
            </IonItem>
        </IonCard>

    )
};

export default PatientAbstractCard;