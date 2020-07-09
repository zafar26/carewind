import React from 'react';
import { IonCard, IonCardHeader, IonText, IonCardContent, IonCardSubtitle, IonItem } from '@ionic/react';
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
            <IonCard style={{ display:'flex', justifyContent:"space-between", margin:"1px", padding:"0px" }}>
                <IonCardHeader style={{width:"65%",padding:"0px"}}>
                    <IonText > <h6 style={{margin:0}}>{name}</h6></IonText>
                    <IonText ><p style={{margin:0, fontSize:"x-small"}}>{age} Age</p></IonText>
                </IonCardHeader>
                <IonCardContent style={{ alignSelf:"center"}}>
                        <div style={{display:"flex"}}>
                            <IonIcon slot="icon-only" icon={timeOutline} />
                            <IonLabel style={{fontSize:"xx-small",marginLeft:"4px"}}>{days} days ago</IonLabel>
                        </div>
                        <div style={{float:"right"}}>
                             <IonBadge color={status === "Done" ? "success" : "danger"}>{status}</IonBadge>
                        </div>
                </IonCardContent>
            </IonCard>
    )
}
export default Card;