import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IonList } from '@ionic/react';
import BookingItem from "../components/BookingItem";
import './bookings.css';
import Header from '../components/Header';
import { Patients } from '../utils/patients';


export default function Bookings() {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonList>
          {Patients.map((patient: { name: string, age: number, days: number, status: string }, key) =>
            <BookingItem key={`patient-${key}`} name={patient.name} age={patient.age} days={patient.days} status={patient.status} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
