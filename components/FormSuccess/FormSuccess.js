import React from 'react';
import { Typography } from '@material-ui/core';

function FormSuccess(airtable) {

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order id is {airtable.airtable}. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </React.Fragment>
  );
}

export default FormSuccess;
