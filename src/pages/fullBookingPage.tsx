import React from 'react';
import { IonPage, IonCard, IonHeader, IonTitle, IonContent, IonToolbar } from "@ionic/react";
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
                <IonCard>
                    <PatientAbstractCard patientName="Shah Rukh Khan" patientAge={54} patientPic="/assets/images/avatar.png" />
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default FullBookingPage;