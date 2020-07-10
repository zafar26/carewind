import React from 'react';
import { IonItem } from '@ionic/react';
import './index.scss';
import PatientAbstract from '../patientAbstract';
import BookingInfo from '../bookingInfo';

interface BookingItemProps {
    name: string;
    gender: string;
    age: number;
    pic : string;
    dateTime: string;
    statusValue: string
}

const BookingItem: React.FC<BookingItemProps> = (props) => {

    const { name, gender, age, pic, dateTime, statusValue } = props;

    return (
        <IonItem lines="full">
            <PatientAbstract patientName={name} patientGender={gender} patientAge={age} patientPic={pic} />
            <BookingInfo dateTime={dateTime} statusValue={statusValue} />
        </IonItem>
    )
};

export default BookingItem;