import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, } from '@ionic/react';
import { ellipsisVertical, search } from 'ionicons/icons';
import './header.css';

interface ContainerProps {
  name: string;
}

const Header: React.FC = () => {
  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>CareWind</IonTitle>
        <IonButtons slot="primary">
          <IonButton>
            <IonIcon slot="icon-only" icon={search} />
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={ellipsisVertical} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
