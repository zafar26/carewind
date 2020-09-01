import React from 'react';
import { IonBadge, IonItemSliding } from '@ionic/react';
import './index.scss'

interface symptomsContainerProps {
    symptomsArray: Array<string>;
};


/* this component should be wrapped in IonItem */

const SymptomsContainer: React.FC<symptomsContainerProps> = (props) => {

    const { symptomsArray } = props;

    let symptoms = symptomsArray.sort().map((symptom, key) => (
        <IonBadge className="symptomBadge" key={key} color="light">{symptom}</IonBadge>
    ));

    return (
        <IonItemSliding>
            {symptoms}
        </IonItemSliding>
    );
};

export default SymptomsContainer;