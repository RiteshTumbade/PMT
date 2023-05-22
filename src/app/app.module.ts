import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';

// Angular material imports
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatSelectModule} from '@angular/material/select';
import { SelectProjectComponent } from './select-project/select-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import { EpicComponent } from './epic/epic.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StoryComponent } from './story/story.component';
import { TaskComponent } from './task/task.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ImpedimentsComponent } from './impediments/impediments.component';
import { ReleaseComponent } from './release/release.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';

// for Scrum Board 

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SelectProjectComponent,
    CreateProjectComponent,
    NavigationComponent,
    EpicComponent,
    StoryComponent,
    TaskComponent,
    FormComponent,
    ImpedimentsComponent,
    ReleaseComponent,
    ScrumBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,
    MatTreeModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
