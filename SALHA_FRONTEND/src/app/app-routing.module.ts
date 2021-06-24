import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ UpdateFemmeComponent } from './update-femme/update-femme.component';
import{ CreateFemmeComponent } from './create-femme/create-femme.component';
import{ FemmeListComponent } from './femme-list/femme-list.component';
import{ FemmeDetailsComponent } from './femme-details/femme-details.component';
import { AjouterCoursierComponent } from './ajouter-coursier/ajouter-coursier.component';
import { ListCoursierComponent } from './list-coursier/list-coursier.component';
import { ModifierCoursierComponent } from './modifier-coursier/modifier-coursier.component';
import { RapportCoursierComponent } from './rapport-coursier/rapport-coursier.component';
import {  ListUnitesComponent } from './list-unites/list-unites.component';
import { UpdateUniteComponent } from './update-unite/update-unite.component';
import { AjoutUniteComponent } from './ajout-unite/ajout-unite.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ListGouvernoratsComponent } from './list-gouvernorats/list-gouvernorats.component';
import { AjouterGouvernoratComponent } from './ajouter-gouvernorat/ajouter-gouvernorat.component';
import { ModifierGouvernoratComponent } from './modifier-gouvernorat/modifier-gouvernorat.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { HomePageComponent } from './home-page/home-page.component';
import {  ListDeclarationProductionComponent } from './list-declaration-production/list-declaration-production.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ProductionFemmeComponent } from './production-femme/production-femme.component';
import { ProduitsProductionComponent } from './produits-production/produits-production.component';
import { ListAlimentationComponent } from './list-alimentation/list-alimentation.component';
import { ModifierAlimentationComponent } from './modifier-alimentation/modifier-alimentation.component';
import { AjouterAlimentationComponent } from './ajouter-alimentation/ajouter-alimentation.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'femmes', component: FemmeListComponent },
  { path: 'femmes/ajouterfemme', component: CreateFemmeComponent },
  { path: 'modifierfemme/:id', component: UpdateFemmeComponent },
  { path: 'rapport/:id', component: FemmeDetailsComponent },
  { path: 'coursiers', component: ListCoursierComponent },
  { path: 'coursiers/ajoutercoursier', component: AjouterCoursierComponent },
  { path: 'modifiercoursier/:id', component: ModifierCoursierComponent },
  { path: 'rapport/:id', component: RapportCoursierComponent },
  { path: 'unites', component: ListUnitesComponent },
  { path: 'updateunite/:id', component: UpdateUniteComponent },
  { path : 'unites/ajouterunite' ,component: AjoutUniteComponent},
  { path : 'produits' ,component: ListProduitsComponent},
  { path : 'produits/ajouterproduit' ,component: AjouterProduitComponent},
  { path : 'gouvernorats', component: ListGouvernoratsComponent},
  { path: 'gouvernorats/ajoutergouvernorat',component: AjouterGouvernoratComponent},
  { path : 'modifiergouvernorat/:id' , component: ModifierGouvernoratComponent},
  { path : 'detailleproduit/:id' , component: DetailProduitComponent},
  { path : 'listdesfemmesayantproduction' , component:  ListDeclarationProductionComponent },
  { path : 'modifierproduit/:id' , component: ModifierProduitComponent },
  { path : 'listdesfemmesayantproduction/:id' , component:ProductionFemmeComponent },
  { path : 'produitsproduction/:id' , component:ProduitsProductionComponent},
  { path : 'alimentations', component: ListAlimentationComponent},
  { path : 'modifieralimentation/:id', component: ModifierAlimentationComponent},
  { path : 'alimentations/ajouteralimentation',component: AjouterAlimentationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
