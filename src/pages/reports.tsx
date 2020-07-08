import React from 'react';
import { IonContent,  IonPage, } from '@ionic/react';
import './reports.css';
import Header from '../components/Header'

function Reports() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        Reports
      </IonContent>
    </IonPage>
  );
}

export default Reports;
