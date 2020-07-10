import React from 'react';
import Layout from '../../containers/layout';
import { Patients } from '../../data/patients';
import SingleBookingItem from '../../components/singleBookingItem';
import SymptomsModal from '../../components/symptomsModal';

const singleBooking: React.FC = (props) => {
    let showSymptomsModal = true

    return (
        <Layout>
            <SingleBookingItem name={Patients[0].name} gender={Patients[0].gender} age={Patients[0].age} pic={Patients[0].pic} symptoms={Patients[0].symptoms} />
            {showSymptomsModal &&
                <SymptomsModal showSymptomsModal={showSymptomsModal} symptomsArray={Patients[0].symptoms} debounce={500} />
            }
        </Layout>
    )
};

export default singleBooking;
