import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'

import { connect } from './hoc'

// import { ageAdd, asyncAgeAdd } from './store/user/actionCreators'
import { ageAdd, asyncAgeAdd } from './store/features/user.js'

export class App extends PureComponent {
  ageAdd(num) {
    this.props.ageAdd(num)
  }

  asyncAgeAdd(num) {
    this.props.asyncAgeAdd(num)
  }

  render() {
    const { name, age } = this.props

    return (
      <>
        <h2>
          {name}的年龄是{age}
        </h2>
        <button onClick={() => this.ageAdd(1)}>马上长大了1岁</button>
        <button onClick={() => this.asyncAgeAdd(10)}>1秒后长大了10岁</button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  age: state.user.age
})

const mapDispatchToProps = dispatch => ({
  ageAdd: num => dispatch(ageAdd(num)),
  asyncAgeAdd: num => dispatch(asyncAgeAdd(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
