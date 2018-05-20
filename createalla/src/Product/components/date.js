import React from 'react';
import { Text } from 'react-native';

const ShowDate = ({date}) => {
  let productDate = new Date(date);
  return (
    <Text style={{fontWeight:'300', fontSize:12}}>
      {new Date().getDate() - productDate.getDate() <= 7 ?
        timeDifference(new Date(), productDate) :
        productDate.toLocaleDateString("en-US")
      }
    </Text>
  )
}

function timeDifference(current, previous) {

    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;

    let timeAgo = current - previous;

    if (timeAgo < msPerMinute) {
         return Math.round(timeAgo/1000) + ' seconds ago';
    }

    else if (timeAgo < msPerHour) {
         return Math.round(timeAgo/msPerMinute) + ' minutes ago';
    }

    else if (timeAgo < msPerDay ) {
         return Math.round(timeAgo/msPerHour ) + ' hours ago';
    }

    else {
        return Math.round(timeAgo/msPerDay) + ' days ago';
    }
}


export default ShowDate;
