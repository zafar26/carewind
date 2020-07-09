import React from 'react';
import './patients.css';
import Layout from '../containers/Layout';
import { Patients as pateintsData } from '../utils/patients';
import PatientAbstractCard from '../components/patientAbstractCard/patientAbstractCard';
import { IonItem } from '@ionic/react';

function Patients() {
  return (
    <Layout>
      {pateintsData.map(({ name, age }, key) =>
        <IonItem lines="full" detail={true} key={`patient-data-${key}`}>
          <PatientAbstractCard patientName={name} patientAge={age} patientPic="/assets/images/avatar.png" />
        </IonItem>
      )}
    </Layout>
  );
}

export default Patients;
