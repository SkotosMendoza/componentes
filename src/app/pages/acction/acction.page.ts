import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-acction',
  templateUrl: './acction.page.html',
  styleUrls: ['./acction.page.scss'],
})
export class AcctionPage implements OnInit {
//aqui se inyectan los servicios o dependencias
  constructor(private actionSheetController:ActionSheetController) { }

  ngOnInit() {
  }
  //aqui se declaran los metodos de los botones
  onClick(){
    //invocar el metodo 
    this.presentActionSheet();

  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      //esta linea impide cerrar la ventana forando elegir una opcion
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        cssClass:"rojo",
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
