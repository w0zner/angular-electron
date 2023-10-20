import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.URL + 'contrato')
    .pipe(
      catchError((error: any) => {
        // Puedes realizar acciones específicas para manejar el error aquí
        //console.error('Error en la solicitud:', error);
        return throwError(error); // Propaga el error para que pueda ser manejado en otro lugar si es necesario
      })
    );
  }

  private handleError(): Observable<never> {
    console.error('Error en la solicitud:');
    // Puedes realizar un registro del error o mostrar un mensaje de error al usuario.
    return throwError('Ocurrió un error al obtener los datos. Por favor, inténtelo de nuevo más tarde.');
  }
}
