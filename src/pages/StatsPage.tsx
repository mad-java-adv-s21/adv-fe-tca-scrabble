import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';



export const StatsPage: React.FC = () => {
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Stats</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
              </IonHeader>
              <h2>High Score:</h2>
              <h2>Low Score:</h2>
              <h2>Longest Word:</h2>
              <h2># of starts:</h2>
              
             <IonButton>
               Back
             </IonButton>
            </IonContent>
          </IonPage>
        );
      };
export default StatsPage; 