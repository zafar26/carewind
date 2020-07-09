import React from 'react';
import { IonList } from '@ionic/react';
import BookingItem from "../../components/bookingItem";
import './index.scss';
import { Patients } from '../../utils/patients';
import Layout from '../../containers/layout';


function Bookings() {
  return (
    <Layout>
      <IonList>
        {Patients.map((patient: { name: string, age: number, dateTime: string, statusValue: string }, key) =>
          <BookingItem key={`patient-${key}`} name={patient.name} age={patient.age} dateTime={patient.dateTime} statusValue={patient.statusValue} />)}
      </IonList>
    </Layout>o
  );
}

export default Bookings;