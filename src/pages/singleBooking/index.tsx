import React from 'react';
import { IonCard } from "@ionic/react";
import PatientAbstractCard from '../../components/patientAbstractCard';
import Layout from '../../containers/layout';


function singleBooking() {
    return (
        <Layout>
            <IonCard>
                <PatientAbstractCard patientName="Shah Rukh Khan" patientAge={54} patientPic="/assets/images/avatar.png" />
            </IonCard>
        </Layout>
    )
};

export default singleBooking;