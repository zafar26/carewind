import React from 'react';
import { IonContent, IonPage, } from '@ionic/react';
import './patients.css';
import Header from '../components/Header'

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
