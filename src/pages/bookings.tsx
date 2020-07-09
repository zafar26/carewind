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
          {Patients.map((patient: { name: string, age: number, dateTime: string, statusValue: string }, key) =>
            <BookingItem key={`patient-${key}`} name={patient.name} age={patient.age} dateTime={patient.dateTime} statusValue={patient.statusValue} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
