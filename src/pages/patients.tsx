import React from 'react';
import { IonContent, IonPage, } from '@ionic/react';
import Header from '../components/header'

function Patients() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        Patients
      </IonContent>
    </IonPage>
  );
}

export default Patients;
