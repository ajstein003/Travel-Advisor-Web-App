import L from 'leaflet';
import hotelIcon from '../icons/hotel-icon.png';
import restaurantIcon from '../icons/restaurant-icon.png';
import attractionIcon from '../icons/attraction-icon.png';

const getMarkerIcon = (locationType) => {
  switch (locationType) {
    case 'hotel':
      return L.icon({
        iconUrl: hotelIcon,
        iconSize: [32, 32],
      });
    case 'restaurant':
      return L.icon({
        iconUrl: restaurantIcon,
        iconSize: [32, 32],
      });
    case 'attraction':
      return L.icon({
        iconUrl: attractionIcon,
        iconSize: [32, 32],
      });
    default:
      return L.icon({
        iconUrl: defaultIcon,
        iconSize: [32, 32],
      });
  }
};

export default getMarkerIcon;
