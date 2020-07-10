import React from 'react';
import { IonList } from '@ionic/react';
import BookingItem from "../../components/BookingItem";
import { Patients } from '../../data/patients';
import Layout from '../../containers/Layout';
import Nothing from '../../components/Button'
import { findByLabelText } from '@testing-library/react';

function Bookings() {
  return (
    <Layout>
      <IonList>
        {Patients.map((patient: { name: string, age: number, dateTime: string, statusValue: string }, key) =>
          <BookingItem key={`patient-${key}`} name={patient.name} age={patient.age} dateTime={patient.dateTime} statusValue={patient.statusValue} />)}
      </IonList>
    </Layout>
  );
}

export default Bookings;