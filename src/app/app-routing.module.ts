import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { FilesComponent } from "./files/files.component";
import { FolioComponent } from "./folio/folio.component";
import { HomeComponent } from "./home/home.component";
import { InterestComponent } from "./interest/interest.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SkillComponent } from "./skill/skill.component";


const routes: Routes = [
    { path: '', component: HomeComponent, data: {Animation: 'OpenClosePage'}},
    { path: 'cv', component: FilesComponent, children: [
        {
            path: '', redirectTo: '/cv/html', pathMatch: 'full'
        },
        {
            path: 'html', component: CvComponent
        },
        {
            path: 'css', component: SkillComponent
        },
        {
            path: 'ts', component: InterestComponent
        }
    ]},
    { path: 'portfolio', component: FolioComponent},
    { path: '**', pathMatch: 'full',
        component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}