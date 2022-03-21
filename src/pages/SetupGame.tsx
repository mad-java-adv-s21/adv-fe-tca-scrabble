import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';



export const SetupGame: React.FC = () => {
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
             <IonButton>
               Setup
             </IonButton>
            </IonContent>
          </IonPage>
        );
      };
export default SetupGame; 