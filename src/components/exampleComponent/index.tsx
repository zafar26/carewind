import React from 'react';
import { IonLabel } from '@ionic/react';
import './index.scss';

interface exampleComponentProps {
    exampleProp: string;
};

const ExampleComponent: React.FC<exampleComponentProps> = (props) => {

    const { exampleProp } = props;

    return (
        <IonLabel>{exampleProp}</IonLabel>
    );
};

export default ExampleComponent;