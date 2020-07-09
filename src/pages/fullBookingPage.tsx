import React from 'react';
import { IonPage, IonCard, IonContent, IonItem, IonIcon } from "@ionic/react";
import PatientAbstract from '../components/patientAbstract';


import { Patients } from '../utils/patients'
import SymptomsContainer from '../components/symptomsContainer';
import { chevronForward } from 'ionicons/icons';
import Header from '../components/header';

const FullBookingPage: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonCard>
                    <IonItem lines="none">
                        <PatientAbstract patientName={Patients[0].name} patientGender={Patients[0].gender} patientAge={Patients[0].age} patientPic={Patients[0].pic} />
                        <IonIcon icon={ chevronForward } slot="end" />
                    </IonItem>
                    <SymptomsContainer symptomsArray={Patients[0].symptoms} />
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default FullBookingPage;