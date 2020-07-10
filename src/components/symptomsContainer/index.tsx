import React from 'react';
import { IonBadge, IonItem, IonItemSliding } from '@ionic/react';
import './index.scss'

interface symptomsContainerProps {
    symptomsArray: Array<string>;
};

const SymptomsContainer: React.FC<symptomsContainerProps> = (props) => {

    const { symptomsArray } = props;

    let symptoms = symptomsArray.sort().map((symptom, key) => (
        <IonBadge className="symptomBadge" key={key} color="light">{symptom}</IonBadge>
    ));

    return (
        <IonItem lines="none">
            <IonItemSliding>
                {symptoms}
            </IonItemSliding>
        </IonItem>
    );
};

export default SymptomsContainer;