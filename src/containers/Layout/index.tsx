import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { IonPage, IonContent } from '@ionic/react'
import Header from '../../components/Header'

function Layout({ children }: InferProps<typeof Layout.propTypes>) {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {children}
      </IonContent>
    </IonPage>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
