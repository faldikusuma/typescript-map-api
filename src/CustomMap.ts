import { User } from './User';

export class CustoMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
}
