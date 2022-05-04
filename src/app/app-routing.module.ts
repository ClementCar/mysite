import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv/cv.component";
import { FilesComponent } from "./files/files.component";
import { HomeComponent } from "./home/home.component";
import { SkillComponent } from "./skill/skill.component";


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cv', component: FilesComponent, children: [
        {
            path: 'html', component: CvComponent
        },
        {
            path: 'css', component: SkillComponent
        }
    ]}
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