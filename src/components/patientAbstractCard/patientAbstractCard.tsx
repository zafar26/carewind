import React from 'react';
import { IonCard, IonItem, IonThumbnail, IonLabel, IonIcon } from "@ionic/react";
import './patientAbstractCard.css';
import { chevronForward } from 'ionicons/icons';
import SymptomsContainer from '../symptomsContainer/symptomsContainer';


interface PatientAbstractCardProps {
    patientName: string;
    patientGender: string;
    patientAge: number;
    patientPic?: string;
    patientSymptoms?: Array<string>
}

const PatientAbstractCard: React.FC<PatientAbstractCardProps> = (props) => {

    const { patientName, patientGender, patientAge, patientPic, patientSymptoms } = props;

    return (
        <IonCard>
            <IonItem lines="none">
                {
                    patientPic && patientPic.length > 0 && (
                        <IonThumbnail slot="start">
                            <img src={`/assets/images/${patientPic}`} alt="patient avatar" className="patientPic" />
                        </IonThumbnail>
                    )
                }
                <IonLabel>
                    <h3>{patientName}</h3>
                    <p>{patientGender}, {patientAge} years old</p>
                </IonLabel>
                <IonIcon icon={chevronForward} slot="end" onClick={() => { }}></IonIcon>
            </IonItem>
            {
                patientSymptoms && patientSymptoms.length > 0 && (
                    <SymptomsContainer symptomsArray={patientSymptoms} />
                )
            }
        </IonCard>

    )
};

export default PatientAbstractCard;