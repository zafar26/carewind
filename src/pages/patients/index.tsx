import React from 'react';
import { Patients as pateintsData } from '../../data/patients';
import { IonItem } from '@ionic/react';
import PatientAbstract from '../../components/patientAbstract';
import Layout from '../../containers/layout';

function Patients() {
    return (
        <Layout>
            {pateintsData.map(({ name, gender, age, pic }, key) =>
                <IonItem lines="full" detail={true} key={`patient-data-${key}`}>
                    <PatientAbstract patientName={name} patientGender={gender} patientAge={age} patientPic={pic} />
                </IonItem>
            )}
        </Layout>
    );
}

export default Patients;
