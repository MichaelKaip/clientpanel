import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';
import{ FormsModule } from '@angular/forms'
import { FlashMessagesModule } from 'angular2-flash-messages'


import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'ClientPanel'),
    AngularFirestoreModule, AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
