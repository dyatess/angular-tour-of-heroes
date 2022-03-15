import { Component, OnInit } from '@angular/core';

// service
import { MessageService } from '../../services/message/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  title:string="message"

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
