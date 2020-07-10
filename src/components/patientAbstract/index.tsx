import React, { Fragment } from 'react';
import { IonThumbnail, IonLabel } from "@ionic/react";
import './index.scss';

interface PatientAbstractProps {
    patientName: string;
    patientGender: string;
    patientAge: number;
    patientPic: string;
}


/* this component should be wrapped in IonItem, and further can be wrapped by IonCard if needed.*/

const PatientAbstract: React.FC<PatientAbstractProps> = (props) => {

    const { patientName, patientGender, patientAge, patientPic } = props;

    return (
        <Fragment>
            <IonThumbnail slot="start">
                <img src={patientPic} alt="patient avatar" className="patientPic" />
            </IonThumbnail>
            <IonLabel>
                <h3>{patientName}</h3>
                <p>{patientGender}, {patientAge} years old</p>
            </IonLabel>
        </Fragment>
    )
};

export default PatientAbstract;