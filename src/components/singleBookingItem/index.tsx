import React from 'react';
import { IonItem, IonButton, IonIcon } from '@ionic/react';
import PatientAbstract from '../patientAbstract';
import SymptomsContainer from '../symptomsContainer';
import { add } from 'ionicons/icons';

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
        <>
            <IonItem detail={true} lines="none">
                <PatientAbstract patientName={name} patientGender={gender} patientAge={age} patientPic={pic} />
            </IonItem>
            <IonItem lines="none">
                <SymptomsContainer symptomsArray={symptoms} />
                <IonButton slot="end" color="dark" onClick={() => {}}><IonIcon icon={add} /></IonButton>
            </IonItem>

        </>
    )
};

export default SingleBookingItem;