import React from 'react'
import PropTypes from 'prop-types'
import { IonLabel, IonIcon, IonBadge } from '@ionic/react'
import { timeOutline } from 'ionicons/icons'

const BookingInfo = ({ status, dateTime}) => {
  return (

    <IonLabel slot="end" class="ion-text-end">
      <p><IonIcon icon={timeOutline} /> {dateTime}</p>
      <IonBadge color={status === "Done" ? "success" : "danger"}>{status}</IonBadge>
    </IonLabel>

  )
}

BookingInfo.propTypes = {

}

export default BookingInfo
