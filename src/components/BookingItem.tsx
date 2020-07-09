import React from 'react';
import { IonItem, IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { timeOutline } from 'ionicons/icons';
import './bookingItem.scss';


interface ContainerProps {
    name: string;
    age: number;
    days: number;
    status: string
}

const BookingItem: React.FC<ContainerProps> = ({ name, age, days, status }) => {
    return (
        <IonItem lines="full">
            <IonGrid>
                <IonRow class="ion-justify-space-between">
                    <IonCol>
                        <IonLabel><h2>{name}</h2></IonLabel>
                    </IonCol>
                    <IonCol class="ion-text-end">
                        <IonLabel><h4>{age} years old</h4></IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow class="ion-justify-space-between">
                    <IonCol>
                        <IonLabel>
                            <h4><IonIcon icon={timeOutline} /> {days} days ago</h4>
                        </IonLabel>
                    </IonCol>
                    <IonCol class="ion-text-end"><IonBadge color={status === "Done" ? "success" : "danger"}>{status}</IonBadge></IonCol>
                </IonRow>
            </IonGrid>
        </IonItem>
    )
}
export default BookingItem;