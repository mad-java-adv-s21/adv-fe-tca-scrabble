import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonItem, IonThumbnail, IonLabel } from '@ionic/react';
import './Home.css';

type Item = {
  src: string; 
  text: string; 
}; 

const items: Item[] = [{src: './scrabbleLogo.jpeg' , text: 'scrabble logo'}]; 
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrabble</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
            
          </IonToolbar>
        </IonHeader>
       <IonButton
        href="/Play">
         Play
       </IonButton>
     
       <IonButton
        href="/Score">
         Score
       </IonButton>
       <h1>STATS</h1>
       <h2>High Score: 130</h2>
        <h2>Low Score: 49</h2>
        <h2>Longest Word: Question</h2>
        <h2>Total Wins: 3</h2>
        <h2>Total Losses: 1</h2>
       
      </IonContent>
    </IonPage>
  );
};

export default Home;
