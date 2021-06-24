import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFemmeComponent } from './create-femme/create-femme.component';
import { FemmeDetailsComponent } from './femme-details/femme-details.component';
import { FemmeListComponent } from './femme-list/femme-list.component';
import { UpdateFemmeComponent } from './update-femme/update-femme.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AjouterCoursierComponent } from './ajouter-coursier/ajouter-coursier.component';
import { ListCoursierComponent } from './list-coursier/list-coursier.component';
import { ModifierCoursierComponent } from './modifier-coursier/modifier-coursier.component';
import { RapportCoursierComponent } from './rapport-coursier/rapport-coursier.component';
import { ListUnitesComponent } from './list-unites/list-unites.component';
import { UpdateUniteComponent } from './update-unite/update-unite.component';
import { AjoutUniteComponent } from './ajout-unite/ajout-unite.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListGouvernoratsComponent } from './list-gouvernorats/list-gouvernorats.component';
import { AjouterGouvernoratComponent } from './ajouter-gouvernorat/ajouter-gouvernorat.component';
import { ModifierGouvernoratComponent } from './modifier-gouvernorat/modifier-gouvernorat.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListDeclarationProductionComponent } from './list-declaration-production/list-declaration-production.component';
import { ProductionFemmeComponent } from './production-femme/production-femme.component';
import { ProduitsProductionComponent } from './produits-production/produits-production.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListAlimentationComponent } from './list-alimentation/list-alimentation.component';
import { AjouterAlimentationComponent } from './ajouter-alimentation/ajouter-alimentation.component';
import { ModifierAlimentationComponent } from './modifier-alimentation/modifier-alimentation.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateFemmeComponent,
    FemmeDetailsComponent,
    FemmeListComponent,
    UpdateFemmeComponent,
    AjouterCoursierComponent,
    ListCoursierComponent,
    ModifierCoursierComponent,
    RapportCoursierComponent,
    ListUnitesComponent,
    UpdateUniteComponent,
    AjoutUniteComponent,
    ListProduitsComponent,
    AjouterProduitComponent,
    ModifierProduitComponent,
    DetailProduitComponent,
    ListGouvernoratsComponent,
    AjouterGouvernoratComponent,
    ModifierGouvernoratComponent,
    HomePageComponent,
    ListDeclarationProductionComponent,
    ProductionFemmeComponent,
    ProduitsProductionComponent,
    SidebarComponent,
    ListAlimentationComponent,
    AjouterAlimentationComponent,
    ModifierAlimentationComponent,
    FileUploaderComponent,
 
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
