import React from 'react';
import { IonItem } from '@ionic/react';
import './index.scss';
import PatientAbstract from '../patientAbstract';
import BookingInfo from '../bookingInfo';

interface ContainerProps {
    name: string;
    gender: string;
    age: number;
    pic : string;
    dateTime: string;
    statusValue: string
}

const BookingItem: React.FC<ContainerProps> = ({ name, gender, age, pic, dateTime, statusValue }) => {
    return (
        <IonItem lines="none">
            <PatientAbstract patientName={name} patientGender={gender} patientAge={age} patientPic={pic} />
            <BookingInfo dateTime={dateTime} statusValue={statusValue} />
        </IonItem>
    )
}
export default BookingItem;