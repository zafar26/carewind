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
    // <IonItemSliding >
    //     <IonItemOptions side="start">
    //         <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
    //         <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
    //     </IonItemOptions>
    //     <IonItem >
            <IonCard style={{display:'flex',width:"100%"}}>
                <IonCardHeader style={{width:"70%"}}>
                    <IonCardTitle >{name}</IonCardTitle>
                    <IonCardSubtitle>{age} Age</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent >
                    <div style={{padding:"16px 0px"}}>
                        <div style={{display:"flex"}}>
                            <IonIcon slot="icon-only" icon={timeOutline} />
                            <IonLabel style={{fontSize:"14px",marginLeft:"4px"}}>{days} days ago</IonLabel>
                        </div>
                        <div style={{float:"right"}}>
                            {status === "Done" ?
                            <p style={{color:"#3CB371"}}>{status}</p>
                            :
                            <p style={{color:"red"}}>{status}</p>
                            }
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>
    //     </IonItem>
    //     <IonItemOptions side="end">
    //         <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
    //     </IonItemOptions>
    // </IonItemSliding>
    )
}
export default Card;