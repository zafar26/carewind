import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';
import { IonIcon, IonLabel, IonBadge  } from '@ionic/react';
import { timeOutline } from 'ionicons/icons';
import './card.css'


interface ContainerProps {
    name: string;
    age:number;
    days:number;
    status:string
}

const Card: React.FC<ContainerProps> = ({name, age, days, status}) => {       
    return(
            <IonCard >
                <IonCardHeader style={{width:"70%"}}>
                    <IonCardTitle >{name}</IonCardTitle>
                    <IonCardSubtitle>{age} Age</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ alignSelf:"center"}}>
                        <div style={{display:"flex"}}>
                            <IonIcon slot="icon-only" icon={timeOutline} />
                            <IonLabel style={{fontSize:"14px",marginLeft:"4px"}}>{days} days ago</IonLabel>
                        </div>
                        <div style={{float:"right"}}>
                             <IonBadge color={ status === "Done" ? "success" : "danger"}>{status}</IonBadge>
                        </div>
                </IonCardContent>
            </IonCard>
    )
}
export default Card;