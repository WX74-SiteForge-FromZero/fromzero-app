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
  selectedProgrammingLanguages:number[]=[];



  frameworksList=[
    {id:1,name:"Vue_Js"},
    {id:2,name:"Angular"},
    {id:3,name:"React"},
  ]
  selectedFrameworks:number[]=[];

  // -----------

  selectedFrameworksAux:string[]=[]

  selectedProgrammingLanguagesAux:string[]=[]

  // -----------

  form: FormGroup;
  hideTechnologies = new FormControl(false);
  hideMethodologies = new FormControl(true);

  selectedLanguages:string[] = [];
  selectedFrameworksTemp:string[] = [];

  selectedFiles: File[] = [];
  removeSelectedLanguage(index:number, list: string[]){
    list.splice(index, 1);
    //this.selectedProgrammingLanguages.splice(index,1);

    this.selectedProgrammingLanguagesAux.splice(index,1);

    //console.log(this.selectedProgrammingLanguages)
  }

  removeSelectedFramework(index:number, list: string[]){
    list.splice(index,1);
    //this.selectedFrameworks.splice(index,1);

    this.selectedFrameworksAux.splice(index,1);

    //console.log(this.selectedFrameworks)
  }

  onFilesSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      this.selectedFiles = Array.from(target.files);
      console.log(this.selectedFiles);
    }
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
          // Aquí va el código para publicar el proyecto
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

  addingLanguages(languageId:number,languageName:string){
    //this.selectedProgrammingLanguages.push(languageId)
    this.selectedProgrammingLanguagesAux.push(languageName);
    const numberControl = this.fb.control(languageName)
    this.languages.push(numberControl);
    //console.log(this.selectedProgrammingLanguages)
  }

  addingFrameworks(frameworkId:number,frameworkName:string){
    //this.selectedFrameworks.push(frameworkId);
    this.selectedFrameworksAux.push(frameworkName);
    const numberControl = this.fb.control(frameworkName)
    this.frameworks.push(numberControl);
    //console.log(this.selectedFrameworks)
  }

}
