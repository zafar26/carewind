import React from 'react';
import { IonList } from '@ionic/react';
import BookingItem from '../../components/bookingItem';
import { Patients } from '../../data/patients';
import Layout from '../../containers/layout';


function Bookings() {
    return (
        <Layout>
            <IonList>
                {Patients.map((patient: { name: string, gender: string, age: number, pic: string, dateTime: string, statusValue: string }, key) =>
                    <BookingItem key={`patient-${key}`} name={patient.name} gender={patient.gender} age={patient.age} pic={patient.pic} dateTime={patient.dateTime} statusValue={patient.statusValue} />)}
            </IonList>
        </Layout>
    );
};

export default Bookings;