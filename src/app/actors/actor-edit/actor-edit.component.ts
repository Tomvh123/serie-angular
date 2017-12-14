import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActorService} from '../../services/actor-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Actor} from '../../models/actor.model';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {

  id: string;
  editMode = false;
  actorForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private actorService: ActorService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }


  onSubmit() {
    if (this.editMode) {
      this.actorService.updateRecipe(this.id, this.actorForm.value);
    } else {
      this.actorService.addActor(this.actorForm.value);
      this.actorService.getActors()
        .then(res => {
          this.actorService.actorChanged.next(res.slice());
        });
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let editactor = new Actor({name: '', imagePath: '', description: ''});

    if (this.editMode) {
      this.actorService.getActor(this.id)
        .then(actor => {
          editactor = actor[0];
          const date = editactor.birthDate.toDateString;
          this.actorForm = new FormGroup({
            'name': new FormControl(editactor.name, Validators.required),
            'imagePath': new FormControl(editactor.imagePath, Validators.required),
            'description': new FormControl(editactor.description, Validators.required),
            'birthDate': new FormControl(editactor.birthDate, Validators.required)
          });

        })
        .catch(error => console.log(error));
    }

    this.actorForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imagePath': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'birthDate': new FormControl('', Validators.required)
    });


  }




}
