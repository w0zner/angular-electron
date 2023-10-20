import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Contrato } from './contrato';
import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  data: Contrato | undefined;
  mensaje: string | undefined;  

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  pieChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  bubleChartType: ChartType = 'bubble';

  public pieChartData: ChartData<'pie', number[], string | string[]> | undefined;

  public barChartData: ChartData<'bar'> | undefined ;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((result) => {
      this.data = result;
      console.log("aaa "+this.data)
      if (this.data != undefined) {
        this.barChartData = {
          labels: ['Días de contrato actual'],
          datasets: [
            { data: [Number(this.data?.diasTranscurridos)], label: 'Transcurrido' },
            { data: [Number(this.data?.diasRestantes)], label: 'Restante' },
            { data: [Number(this.data?.diasTotal)], label: 'Total' },
          ],
        };

        this.pieChartData  = {
          labels: [['Transcurrido'], ['Restante']],
          datasets: [
            {
              data: [parseFloat(this.data.totalEjecutado), parseFloat(this.data.totalRestante)],
              backgroundColor: ['#ffa1b5', '#86c7f3']
            },
          ],
        };
      }

    },
    (error) => {
      console.log(error)
      if(error.status===0) {
        this.mensaje = "No hay fuente de datos!"
      } else if(error.status===404) {
        this.mensaje = "No hay datos para mostrar!"
      } else if(error.status===500) {
        this.mensaje = "Error en la fuente!"
      }
      console.error('Ocurrió un error en la solicitud:', error);
    })
  }
  
}
