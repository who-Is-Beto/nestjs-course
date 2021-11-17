export class CreateProductDTO {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly image: string;
  readonly stocks: number;
}

export class UpdateProductDTO {
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly image?: string;
  readonly stocks?: number;
}

//readonly viene de ts y dice que no se puede modificar el valor, asi como llega se va a la base de datos.
