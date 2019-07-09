import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'convertImage';
	image: any;
	resultEnd: any;

	changeListener($event): void {
		this.readThis($event.target);
	}

	//read function the image
	readThis(inputValue: any): void {
		//Declaracion of variable of lecture
		var file: File = inputValue.files[0];
		var myReader: FileReader = new FileReader();

		myReader.onloadend = (e) => {
			this.image = myReader.result;
			//Get Value Base64
			//TODO: GET VALUE and call function of load PDF OJO Jonathan.
			console.log('xxxxxxx', myReader.result);
		};
		//reload varible of loadImage Local
		myReader.readAsDataURL(file);
	}
}
