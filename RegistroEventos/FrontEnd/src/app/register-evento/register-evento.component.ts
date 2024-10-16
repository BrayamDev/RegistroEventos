import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../Services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { IRequestRegistroEvento } from '../Models/RequestIRegistroEvento.Interface';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-register-evento',
  providers: [ApiService],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule], // Add CommonModule here
  templateUrl: './register-evento.component.html',
  styleUrl: './register-evento.component.css'
})
export class RegisterEventoComponent implements OnInit {
  eventoForm: FormGroup;
  eventos: any[] = []; // Array para almacenar la lista de eventos

  constructor(private api: ApiService) {
    this.eventoForm = new FormGroup({
      nombreEvento: new FormControl('', Validators.required),
      documentoIdentidad: new FormControl('', Validators.required),
      participante: new FormControl('', Validators.required),
      codigoEstudiante: new FormControl('', Validators.required),
      nombreEstudiante: new FormControl('', Validators.required),
      fechaIngreso: new FormControl('', Validators.required),
      horaSistema: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.obtenerEventos(); 
  }

  registroEvento(form: IRequestRegistroEvento) {
    this.api.registroEvento(form).subscribe(datosretorno => {
      console.log('Respuesta del servidor:', datosretorno);
      
      this.eventos = datosretorno.data;
      
    }, error => {
      console.error('Error al registrar el evento:', error);
    });
  }

  obtenerEventos() {
    this.api.obtenerEventos().subscribe(eventos => {
      this.eventos = eventos; 
    }, error => {
      console.error('Error al obtener los eventos:', error);
    });
  }
}
