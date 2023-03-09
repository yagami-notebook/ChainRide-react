// utils
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import _ from 'lodash'

// form validators
import { RideValidator } from '../ride-validator/ride-validator'

// components
import DatePicker from '../../inputs/DatePicker'
import { renderTextField } from '../../shared/render-text-field/render-text-field'
import { renderGeoTextField } from '../../shared/render-geo-text-field/render-geo-text-field'
import { renderSelectField } from '../../shared/render-select-field/render-select-field'

class RideForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    rideOptions: PropTypes.object.isRequired,
    ride: PropTypes.object
  }

  render() {
    const { handleSubmit, rideOptions, ride } = this.props
    let currencies = rideOptions.currencies.map((currency, i) =>
      <MenuItem value={currency} key={'option-' + i} primaryText={currency}/>
    )
    let cars = rideOptions.cars.map((car, i) =>
      <MenuItem value={car.id} key={'car-' + i} primaryText={car.full_name}/>
    )

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="start_location"
          type="text"
          component={renderGeoTextField}
          label="Start city"
          initialValue={ride ? ride.start_location_address : ''}
        />
        <Field
          name="destination_location"
          type="text"
          component={renderGeoTextField}
          label="Destination name"
          initialValue={ride ? ride.destination_location_address : ''}
        />
        <Field name="start_date"
          component={DatePicker}
          floatingLabelText="Start date"
          className='date-input'
          minDate={new Date()}
        />
        <Field name="car_id" component={renderSelectField} label="Car">
          {_.map(cars, (n) => n)}
        </Field>
        <Field name="places"
          type="text"
          component={renderTextField}
          label="Seats"
        />
        <Field
          name="price"
          type="text"
          component={renderTextField}
          label="Price"
        />
        <Field name="currency" component={renderSelectField} label="Currency">
          {_.map(currencies, (n) => n)}
        </Field>
        <button type="submit" className="btn btn-default form-submit">Submit</button>
      </form>
    )
  }
}

RideForm = reduxForm({
  form: 'RideForm',
  validate: RideValidator,
})(RideForm)

RideForm = connect(
  (state, props) => ({
    initialValues: props.ride
  })
)(RideForm)

export default RideForm
