import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IonList } from '@ionic/react';
import BookingItem from "../components/bookingItem";
import Header from '../components/header';
import { Patients } from '../utils/patients';


export default function Bookings() {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonList>
          {Patients.map((patient: { name: string, gender: string, pic: string, age: number, dateTime: string, statusValue: string }, key) =>
            <BookingItem key={`patient-${key}`} name={patient.name} gender={patient.gender} age={patient.age} pic={patient.pic} dateTime={patient.dateTime} statusValue={patient.statusValue} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
