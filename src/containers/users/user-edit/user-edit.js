// utils
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Col } from 'react-bootstrap'

// actions
import { updateCurrentUser } from '../../../actions/users'

// components
import UserEditForm from '../../../components/users/user-edit-form/user-edit-form'

export class UserEdit extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
  }

  handleSubmit(data) {
    const { updateCurrentUser } = this.props
    var body = new FormData()

    Object.keys(data).forEach(( key ) => {
      if (key === 'avatar') {
        if (_.isObject(data[key])) { body.append(key, data[key][0]) }
      } else {
        if (data[key]) { body.append(key, data[key]) }
      }
    })
    updateCurrentUser(body)
  }

  render() {
    const { currentUser } = this.props

    return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>My profile</div>
          </div>
          <UserEditForm
            currentUser={currentUser}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </Col>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.item
  }
}

const mapDispatchToProps = {
  updateCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
