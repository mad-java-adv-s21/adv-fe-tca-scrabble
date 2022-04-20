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

    const startGame  = () => {

      // set up players and start time 
      setCurrentGame({
        start: new Date().toISOString()
        , player: [
            pastPlayers[0] 
            , pastPlayers[1]
            , "kate" 
        ]
      });

      // nav to play screen 
      history.push("/play")

    };  


    

    
    


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
              onClick={startGame}
              >
              
              Start
              
          </IonButton>
          
        </IonContent>
      </IonPage>
        );
      };
    

     

      
export default Score; 