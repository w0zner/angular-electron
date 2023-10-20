export class Contrato {
  diasRestantes: string;
  diasTotal: string;
  diasTranscurridos: string;
  totalEjecutado: string;
  totalRestante: string;

  constructor(diasRestantes: string , diasTotal: string , diasTranscurridos: string , totalEjecutado: string , totalRestante: string ) {
    this.diasRestantes = diasRestantes
    this.diasTotal = diasTotal
    this.diasTranscurridos = diasTranscurridos
    this.totalEjecutado = totalEjecutado
    this.totalRestante = totalRestante
  }
}