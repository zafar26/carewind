import React from 'react';
import Layout from '../../containers/layout';
import { Patients } from '../../data/patients';
import SingleBookingItem from '../../components/singleBookingItem';

function singleBooking() {
    return (
        <Layout>
            <SingleBookingItem name={Patients[0].name} gender={Patients[0].gender} age={Patients[0].age} pic={Patients[0].pic} symptoms={Patients[0].symptoms} />
        </Layout>
    )
};

export default singleBooking;
