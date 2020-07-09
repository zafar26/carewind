import React from 'react';
import { IonItem, IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { timeOutline, chevronForward } from 'ionicons/icons';
import './bookingItem.scss';
import PatientAbstractCard from './patientAbstractCard/patientAbstractCard';


interface ContainerProps {
    name: string;
    age: number;
    days: number;
    status: string
}

const BookingItem: React.FC<ContainerProps> = ({ name, age, days, status }) => {
    return (
        <IonItem lines="full">
            <PatientAbstractCard patientName="Shah Rukh Khan" patientAge={54} patientPic="/assets/images/avatar.png" />
            <BookingInfo />            
            {/* <IonIcon slot="end" icon={chevronForward} /> */}
        </IonItem>
    )
}
export default BookingItem;