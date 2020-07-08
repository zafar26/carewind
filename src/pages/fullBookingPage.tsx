import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar } from "@ionic/react";
import PatientAbstractCard from '../components/patientAbstractCard/patientAbstractCard';


const FullBookingPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>booking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <PatientAbstractCard patientName="Shah Rukh Khan" patientAge={54} patientPic="avatar.png" />
            </IonContent>
        </IonPage>
    )
};

export default FullBookingPage;