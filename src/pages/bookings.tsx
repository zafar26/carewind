import React from 'react';
import { IonContent, IonPage, } from '@ionic/react';
import {  IonList  } from '@ionic/react';
import Card from "../components/Card"
import './bookings.css';
import Header from '../components/Header'

function Bookings() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          <Card  name="Khaja Naquiuddin" age={32} days={3} status="Done"/>
          <Card  name="Mohammed Zafar" age={22} days={2} status="Done"/>
          <Card  name="M.A Mudassir Ahmed" age={22} days={1} status="Done"/>
          <Card  name="Qutubuddin" age={32} days={3} status="Cancelled"/>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Bookings;
