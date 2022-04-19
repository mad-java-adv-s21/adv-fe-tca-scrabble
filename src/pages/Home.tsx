import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonItem, IonText, IonThumbnail, IonLabel } from '@ionic/react';
import './Home.css';
import { gameResult } from '../App'; 
import { useHistory } from 'react-router-dom'; 


interface HomeProps {
  gameResults: gameResult[]
}


const Home: React.FC<HomeProps> = ({gameResults}) => {

  const nav = useHistory(); 
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrabble</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonImg src="assets/scrabbleLogo.jpeg"></IonImg>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
            
          </IonToolbar>
        </IonHeader>
       <IonButton
            href="/play"
            onClick={() => "/score"}
            >
            Play
       </IonButton>

       <IonButton
            href="/Score">
            Score
       </IonButton>

       <h3>
            Total Games Played: {gameResults.length}
       </h3>
       
    
       
      </IonContent>
    </IonPage> 
  );
  
};

export default Home;
