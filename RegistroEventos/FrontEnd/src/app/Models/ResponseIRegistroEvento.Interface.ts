export interface IResponseRegistroEvento {
    error: string;
    status: string;
    msg: string;
    body: {
      nombreEvento: string;
      documentoIdentidad: string;
      participante: string;
      codigoEstudiante: string;
      nombreEstudiante: string;
      fechaIngreso: string;
      horaSistema: string;
    };
    data: Array<{
      nombreEvento: string;
      documentoIdentidad: string;
      participante: string;
      codigoEstudiante: string;
      nombreEstudiante: string;
      fechaIngreso: string;
      horaSistema: string;
    }>;
}
  