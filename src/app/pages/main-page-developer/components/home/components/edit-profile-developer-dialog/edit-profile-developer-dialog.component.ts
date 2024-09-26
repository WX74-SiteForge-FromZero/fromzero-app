import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDeveloperProfileUpdate} from "../../models/developer-profile-update.model";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";

@Component({
  selector: 'app-edit-profile-developer-dialog',
  templateUrl: './edit-profile-developer-dialog.component.html',
  styleUrl: './edit-profile-developer-dialog.component.css'
})
export class EditProfileDeveloperDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProfileDeveloperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDeveloperProfileTemp,
    private _profileService: ProfileService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    let idDeveloper: number = Number(localStorage.getItem('id'));
    let originalData = {...this.data};
    this.data.id = idDeveloper;

    let updateData: IDeveloperProfileUpdate = {
      id: this.data.id,
      description: this.data.description,
      country: this.data.country,
      phone: this.data.phone,
      specialties: this.data.specialties,
      profileImgUrl: this.data.profileImgUrl
    };

    this._profileService.updateDeveloperProfile(idDeveloper, updateData).subscribe({
      next: (response) => {
        console.log(response);
        this.dialogRef.close();
      }, error: () => {
        this.data = originalData;
      }
    })
  }
}
