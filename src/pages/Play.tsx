import React, { useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, } from '@ionic/react';
import './Home.css';



export const Play: React.FC = () => {
    const [text, setText] = useState<string>();
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Scrabble</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
              <h2>Enter a new opponent</h2>
          <IonItem>
            <IonTextarea placeholder="Enter more information here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>
             <IonButton>
               Back
             </IonButton>
            </IonContent>
          </IonPage>
        );
      };
export default Play; 