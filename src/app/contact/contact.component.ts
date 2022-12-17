import { Component } from '@angular/core';
import { faFacebook,faTelegram,faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  facebook = faFacebook;
  telegram = faTelegram;
  google = faGoogle;
}
