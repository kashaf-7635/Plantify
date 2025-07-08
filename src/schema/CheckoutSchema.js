import * as Yup from 'yup';

const CheckoutSchema = Yup.object().shape({
  name: Yup.string().trim().required('Please input your full name'),
  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .required('Please input your email'),
  address: Yup.string().trim().required('Please input your address'),
  contact: Yup.string()
    .trim()
    .matches(/^\d{10,15}$/, 'Phone number must be 10–15 digits')
    .required('Please input your phone number'),

  deliveryMethod: Yup.string()
    .oneOf(['quick', 'cod'])
    .required('Delivery method is required'),

  paymentMethod: Yup.string().when('deliveryMethod', {
    is: val => val !== 'cod',
    then: schema => schema.required('Payment method is required'),
    otherwise: schema => schema,
  }),

  pin: Yup.string()
    .notRequired()
    .when(['deliveryMethod'], {
      is: deliveryMethod => deliveryMethod !== 'cod',
      then: (schema, context) =>
        context?.context?.isEdit === false
          ? schema.required('PIN is required')
          : schema,
    }),

  cardName: Yup.string()
    .notRequired()
    .when(['deliveryMethod'], {
      is: deliveryMethod => deliveryMethod !== 'cod',
      then: (schema, context) =>
        context?.context?.isEdit === false
          ? schema.required('Card name is required')
          : schema,
    }),

  expiry: Yup.string()
    .notRequired()
    .when(['deliveryMethod'], {
      is: deliveryMethod => deliveryMethod !== 'cod',
      then: (schema, context) =>
        context?.context?.isEdit === false
          ? schema.required('Expiry is required')
          : schema,
    }),

  cvc: Yup.string()
    .notRequired()
    .when(['deliveryMethod'], {
      is: deliveryMethod => deliveryMethod !== 'cod',
      then: (schema, context) =>
        context?.context?.isEdit === false
          ? schema.required('CVC is required')
          : schema,
    }),
});

export default CheckoutSchema;
