import React from 'react';
import { IonHeader, IonText, IonToolbar, IonItem, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { ellipsisVertical,  search, chatbubbles } from 'ionicons/icons';
import './header.css';
import { isWhiteSpaceLike } from 'typescript';

interface ContainerProps {
  name: string;
}

const Header: React.FC = () => {
  return (
    <IonHeader style={{background:"white"}}>
      <IonGrid>
      <IonRow> 
        <IonCol size="5">
          <IonButton  size="small">
             <IonText>CareWind</IonText>
          </IonButton>
        </IonCol>
        <IonCol style={{display:"flex", justifyContent:"flex-end"}}>
        <IonButton size="small" onClick={()=>console.log("icon Clicked")}>
            <IonIcon slot="icon-only" icon={search}  />
          </IonButton>
          <IonButton size="small">
            <IonIcon slot="icon-only" icon={chatbubbles} />
          </IonButton>
          <IonButton size="small">
            <IonIcon slot="icon-only" icon={ellipsisVertical} />
          </IonButton>

        </IonCol>
    
      </IonRow>
      </IonGrid>
      </IonHeader>
  );
};

export default Header;
