import React from 'react';
import { IonThumbnail, IonLabel } from "@ionic/react";
import './patientAbstractCard.scss';

interface PatientAbstractCardProps {
    patientName: string;
    patientAge: number;
    patientPic: string;
}

const PatientAbstractCard: React.FC<PatientAbstractCardProps> = (props) => {

    const { patientName, patientAge, patientPic } = props;

    return (
        <>
            <IonThumbnail slot="start">
                <img src={patientPic} alt="patient avatar" className="patientPic" />
            </IonThumbnail>
            <IonLabel>
                <h3>{patientName}</h3>
                <p>{patientAge} years old</p>
            </IonLabel>
        </>
    )
};

export default PatientAbstractCard;