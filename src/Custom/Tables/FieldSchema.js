import { CustomTypes } from '../../utils/Enums';

export const ProductFields = [
  {
    data_property: 'type',
    name: 'Tipo',
    type: CustomTypes.StringImage,
  },
  {
    data_property: 'brand',
    name: 'Marca',
    size: 200,
    type: CustomTypes.String,
  },
  {
    data_property: 'value',
    name: 'Valor',
    size: 200,
    type: CustomTypes.Currency,
  },
  {
    data_property: 'size',
    name: 'Tamanho',
    size: 150,
    type: CustomTypes.String,
  },
  {
    data_property: 'amount',
    name: 'Quantidade',
    size: 160,
    type: CustomTypes.Number,
  },
  {
    data_property: 'color',
    name: 'Cor',
    size: 100,
    type: CustomTypes.Color,
  },
];

export const OrderFields = [
  {
    data_property: 'product.type',
    name: 'Tipo',
    type: CustomTypes.StringImage,
  },
  {
    data_property: 'product.brand',
    name: 'Marca',
    type: CustomTypes.String,
  },
  {
    data_property: 'value',
    name: 'Valor pago',
    type: CustomTypes.Currency,
  },
  {
    data_property: 'amount',
    name: 'Quantidade',
    type: CustomTypes.Number,
  },
  {
    data_property: 'created_at',
    name: 'Data',
    type: CustomTypes.Date,
  },
];
