import React, { FC } from 'react'
import { IonLabel, IonIcon, IonBadge } from '@ionic/react'
import { timeOutline } from 'ionicons/icons'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

// Fix the types to use it properly
interface STATUS {
  label: string;
  color: string;
  value: string;
}

interface STATUSES {
  upcoming: STATUS,
  done: STATUS,
  cancelled: STATUS,
  noShow: STATUS
}


const STATUSES: { [key: string]: STATUS; } = {
  upcoming: {
    label: "Upcoming",
    color: "primary",
    value: "upcoming"
  },
  done: {
    label: "Done",
    color: "success",
    value: "done"
  },
  cancelled: {
    label: "Cacelled",
    color: "danger",
    value: "canclled"
  },
  noShow: {
    label: "No Show",
    color: "warning",
    value: "no-show"
  }
};

interface Props {
  statusValue: string;
  dateTime: string;
}


const BookingInfo: FC<Props> = ({ statusValue, dateTime }) => {
  let agoDate = dayjs(dateTime);
  // console.log(agoDate,"agoDate",dayjs,"dayjs",dateTime,"dateTime")
  return (
    <IonLabel class="ion-text-end">
      <p><IonIcon icon={timeOutline} /> {agoDate.fromNow()} </p>
      <IonBadge color={STATUSES[statusValue].color}>{STATUSES[statusValue].label}</IonBadge>
    </IonLabel>

  )
}

export default BookingInfo
