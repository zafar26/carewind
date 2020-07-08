import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';
import { IonItem,  IonIcon, IonLabel, IonList, IonItemSliding, IonItemOptions, IonItemOption,  } from '@ionic/react';
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
            <IonCard style={{display:'flex',justifyContent:"space-between",margin:2,padding:0 }}>
                <IonCardHeader style={{width:"70%"}}>
                    <IonCardTitle >{name}</IonCardTitle>
                    <IonCardSubtitle>{age} Age</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ alignSelf:"center"}}>
                    {/* <div style={{padding:"16px 0px"}}> */}
                        <div style={{display:"flex"}}>
                            <IonIcon slot="icon-only" icon={timeOutline} />
                            <IonLabel style={{fontSize:"14px",marginLeft:"4px"}}>{days} days ago</IonLabel>
                        </div>
                        <div style={{}}>
                            {status === "Done" ?
                            <p style={{float:"right",color:"#3CB371"}}>{status}</p>
                            :
                            <p style={{float:"right",color:"red"}}>{status}</p>
                            }
                        </div>
                    {/* </div> */}
                </IonCardContent>
            </IonCard>
    )
}
export default Card;