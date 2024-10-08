import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {ProjectsApiService} from "../../../home/services/projects-api.service";

@Component({
  selector: 'app-form-create-project',
  templateUrl: './form-create-project.component.html',
  styleUrl: './form-create-project.component.css'
})
export class FormCreateProjectComponent implements OnInit{
  userId:number;
  programmingLanguagesList=[
    {id:1,name:"Javascript"},
    {id:2,name:"Typescript"},
    {id:3,name:"HTML"},
    {id:4,name:"CSS"},
  ]

  frameworksList=[
    {id:1,name:"Vue_Js"},
    {id:2,name:"Angular"},
    {id:3,name:"React"},
  ]

  // -----------

  selectedFrameworksAux:string[]=[]

  selectedProgrammingLanguagesAux:string[]=[]

  // -----------

  form: FormGroup;
  hideTechnologies = new FormControl(false);
  hideMethodologies = new FormControl(true);

  selectedLanguages:string[] = [];
  selectedFrameworks:string[] = [];

  removeSelectedLanguage(index:number, list: string[]){
    list.splice(index, 1);
    this.selectedProgrammingLanguagesAux.splice(index,1);
  }

  removeSelectedFramework(index:number, list: string[]){
    list.splice(index,1);
    this.selectedFrameworksAux.splice(index,1);
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog,private projectsService:ProjectsApiService) {
    this.userId = Number(localStorage.getItem('id'));
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      projectType: ['', Validators.required],
      languages:this.fb.array([]),
      frameworks:this.fb.array([]),
      presupuesto: ['', Validators.required],
      procesos: [''],
    });

    this.hideMethodologies.valueChanges.subscribe((checked: boolean | null) => {
      if (!checked) {
        this.form.get('procesos')?.setValidators([Validators.required]);
      }else{
        this.form.get('procesos')?.clearValidators();
        this.form.get('procesos')?.setValue('');
      }

      this.form.get('procesos')?.updateValueAndValidity();

    });
  }
  ngOnInit() {

  }


  onSubmit() {
    if (this.form.valid && this.languages.length>0 && this.frameworks.length>0) {

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: {message: '¿Estás seguro de que quieres publicar el proyecto?'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

          let project ={
            name: this.form.get('title')?.value,
            description: this.form.get('description')?.value,
            ownerId:this.userId,
            languages:this.form.get('languages')?.value,
            frameworks:this.form.get('frameworks')?.value,
            type:this.form.get('projectType')?.value,
            budget:this.form.get('presupuesto')?.value,
            methodologies:this.form.get('procesos')?.value,
          }
          this.projectsService.postProject(project).subscribe(response=>{
            console.log(response)
          })
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  get languages():FormArray{
    return this.form.get('languages') as FormArray;
  }

  get frameworks():FormArray{
    return this.form.get('frameworks') as FormArray;
  }

  addingLanguages(languageName:string){
    this.selectedProgrammingLanguagesAux.push(languageName);
    const numberControl = this.fb.control(languageName)
    this.languages.push(numberControl);
  }

  addingFrameworks(frameworkName:string){
    this.selectedFrameworksAux.push(frameworkName);
    const numberControl = this.fb.control(frameworkName)
    this.frameworks.push(numberControl);
  }

}
