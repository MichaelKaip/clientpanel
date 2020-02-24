import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Client } from '../../models/Client'
import { SettingsService } from '../../services/settings.service'

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id: string
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  disableBalanceOnEdit: boolean

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    // Get the id from url
    this.id = this.route.snapshot.params['id']
    // Get the client by id
    this.clientService.getClient(this.id).subscribe(client => this.client = client)

    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if(!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      })
    } else {
      // Add an id to the client
      value.id = this.id
      // Update the client
      this.clientService.updateClient(value)
      this.flashMessage.show('Client updated succesfully', {
        cssClass: 'alert-success', timeout: 4000
      })
      this.router.navigate(['/client/' + this.id])
    }
  }

}
