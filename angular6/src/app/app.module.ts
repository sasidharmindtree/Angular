import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from "./first-page/first-page.Services"
import { UserService } from "./third-page/third-page.services"


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
         MatIconModule, MatListModule, MatCardModule,
         MatDialogModule,MatStepperModule,MatFormFieldModule,
         MatInputModule,MatTabsModule, MatSortModule} from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TestComponent } from './test/test.component';
import { ChartComponent } from './chart/chart.component';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { AngularComponent } from './angular/angular.component';
import { NodeComponent } from './node/node.component';
import { FileSizePipe, ToCapsPipe ,DisplayNamePipe } from './pipe/pipe.component';
import { HighlightDirective } from './highlight.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarModule } from 'ngx-avatar';
// import {CarouselModule} from "angular2-carousel";

//services
// import {FirstServices} from "./first-page/first.services";

const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent},
  { path: 'second-page', component: SecondPageComponent},
  { path: 'third-page', component: ThirdPageComponent}
  // { path: 'chart', component: ChartComponent},
  // { path: 'avatar', component: AvatarComponent},
  // { path: 'model', component: DialogComponent},
  { path: 'angular/:id', 
   component: AngularComponent,
   children:[{path:'overview',component:TestComponent}]},
  { path: 'node/:id', component: NodeComponent},
  { path: '**', component:TestComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    DialogComponent,
    DialogContentExampleDialog,
    TestComponent,
    ChartComponent,
    DoughnutChartComponent, PieChartComponent, BarChartComponent,
     AngularComponent, NodeComponent, FileSizePipe,ToCapsPipe, HighlightDirective,DisplayNamePipe, 
     AvatarComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularFontAwesomeModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSortModule,
    NgbModule,
    AvatarModule
    // CarouselModule
      
  ],
  entryComponents: [
    DialogContentExampleDialog
  ],
  providers: [RegisterService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
