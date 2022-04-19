import React, { useEffect, useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonInput, IonLabel, IonCheckbox, IonList  } from '@ionic/react';
import './Home.css';
import { gameResult, currentGame } from '../App'; 
import { useHistory } from 'react-router-dom'; 




interface PlayProps {
    addGameResult: (r: gameResult) => void; 
    currentGame: currentGame; 
  }

 export const Play: React.FC<PlayProps> = ({
   addGameResult
   , currentGame
  }) => {

  
    const history = useHistory(); 

  
    


        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Play</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
              <h2>Player Name</h2>
              <IonItem>
            <input type="text" id="playerName"/>
            <IonButton>Add New Player</IonButton>
          </IonItem>
          
         
        
        
          
  
          

          <IonButton 
              href="/home">
              Back
          </IonButton>
          <IonButton 
              href="/score"
              
              >
              
              Play
              
          </IonButton>
          <IonButton
              
          >
              Done
          </IonButton>
        </IonContent>
      </IonPage>
        );
      };
    

     

      
export default Play; 