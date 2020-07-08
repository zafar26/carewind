import React from 'react';
import { IonContent, IonPage, } from '@ionic/react';
import {  IonList  } from '@ionic/react';
import Card from "../components/Card"
import './bookings.css';
import Header from '../components/Header'

const patientArray = [
  { name: "Khaja Naquiuddin", age:32, days: 3, status:"Done" },
  { name: "Mohammed Zafar", age:22, days: 2, status:"Done" },
  { name: "M.A Mudassir", age:22, days: 1, status:"Done" },
  { name: "Khaja Naquiuddin", age:32, days: 3, status:"Cancelled" },
]

function Bookings() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          { patientArray.map((d) => <Card name={d.name} age={d.age} days={d.days} status={d.status} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Bookings;
