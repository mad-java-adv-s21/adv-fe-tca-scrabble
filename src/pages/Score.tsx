import React, { useEffect, useState } from 'react'; 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItemDivider, IonItem, IonTextarea, IonInput, IonLabel, IonCheckbox, IonList  } from '@ionic/react';
import './Home.css';
import { gameResult, currentGame } from '../App'; 
import { useHistory } from 'react-router-dom'; 


interface ScoreProps {
    pastPlayers: string[];
    setCurrentGame: (game: currentGame) => void; 
  }

 export const Score: React.FC<ScoreProps> = ({
   pastPlayers
   , setCurrentGame
  }) => {

    const playersWithCheckedBoolean = pastPlayers.map(x => ({
      name: x 
      , checked: false
    }))
  
    const history = useHistory(); 

    
    


        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Update Scores</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
             
          
         
        
        
          
          <h3>
            Choose Players
          </h3>
          {
            playersWithCheckedBoolean.map(x => <p key={x.name}>{x.name}</p>)
          }
          

          <IonButton 
              href="/home">
              Back
          </IonButton>
          <IonButton 
              href="/Play"
              
              >
              
              Play
              
          </IonButton>
          
        </IonContent>
      </IonPage>
        );
      };
    

     

      
export default Score; 