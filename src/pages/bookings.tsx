import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IonList } from '@ionic/react';
import Card from "../components/Card";
import './bookings.css';
import Header from '../components/Header';
import { Patients } from '../utils/patients';


export default  function Bookings() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          {Patients.map((patient) => <Card name={patient.name} age={patient.age} days={patient.days} status={patient.status} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
