import React from 'react';
import { IonItem } from '@ionic/react';
import './bookingItem.scss';
import PatientAbstractCard from './patientAbstractCard/patientAbstractCard';
import BookingInfo from './BookingInfo';

interface ContainerProps {
    name: string;
    age: number;
    dateTime: string;
    statusValue: string
}

const BookingItem: React.FC<ContainerProps> = ({ name, age, dateTime, statusValue }) => {
    return (
        <IonItem lines="full" detail={true}>
            <PatientAbstractCard patientName="Shah Rukh Khan" patientAge={54} patientPic="/assets/images/avatar.png" />
            <BookingInfo dateTime={dateTime} statusValue={statusValue} />
        </IonItem>
    )
}
export default BookingItem;