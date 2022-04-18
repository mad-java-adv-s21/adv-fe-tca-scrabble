import React, { useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonMenu, IonList, IonSplitPane } from '@ionic/react';
import './Home.css';



export const Score: React.FC = () => {
    const [text, setText] = useState<string>();
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Score</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
                
              </IonHeader>
             
    
            <h2>High Score: </h2> <input type="text" />
            <h2>Low Score: </h2>  <input type="text" />
            <h2>Longest Word: </h2> <input type="text" />
   
        
            <br /><br />
       
             <IonButton >
               Update Score
             </IonButton>
             <IonButton
                  href="/Home">
                  Back
            </IonButton>
            </IonContent>
          </IonPage>
        );
      };
export default Score; 