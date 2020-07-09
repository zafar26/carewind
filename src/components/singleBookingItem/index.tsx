import React, { Fragment } from 'react';
import { IonItem, IonIcon } from '@ionic/react';
import PatientAbstract from '../patientAbstract';
import SymptomsContainer from '../symptomsContainer';

interface SingleBookingItemProps {
    name: string;
    gender: string;
    age: number;
    pic: string;
    symptoms: string[];
}

const SingleBookingItem: React.FC<SingleBookingItemProps> = (props) => {

    const { name, gender, age, pic, symptoms } = props;

    return (
        <Fragment>
            <IonItem detail={true} lines="none">
                <PatientAbstract patientName={name} patientGender={gender} patientAge={age} patientPic={pic} />
            </IonItem>
            <SymptomsContainer symptomsArray={symptoms} />
        </Fragment >
    )
};

export default SingleBookingItem;