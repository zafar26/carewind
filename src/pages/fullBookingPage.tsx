import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar } from "@ionic/react";
import PatientAbstractCard from '../components/patientAbstractCard/patientAbstractCard';

const patientBookingData = {
    patientName: "Shah Rukh Khan",
    patientGender: "Male",
    patientAge: 54,
    patientPic: "avatar.png",
    patientSymptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"]
}

const FullBookingPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>booking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <PatientAbstractCard patientName={patientBookingData.patientName} patientGender={patientBookingData.patientGender} patientAge={patientBookingData.patientAge} patientPic={patientBookingData.patientPic} patientSymptoms={patientBookingData.patientSymptoms} />
            </IonContent>
        </IonPage>
    )
};

export default FullBookingPage;