import React from 'react'
import { connect } from 'react-redux'

export const Teacher = (props) => {
  return (
    <div>Teacher</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher)