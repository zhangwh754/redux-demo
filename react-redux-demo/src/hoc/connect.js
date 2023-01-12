import { PureComponent } from 'react'
import { StoreContext } from './StoreProvider'

// import store from '../store'

export const connect = function (mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return class NewComponent extends PureComponent {
      static contextType = StoreContext

      constructor(props, context) {
        super(props)

        this.store = context

        this.state = mapStateToProps(this.store.getState())
      }

      componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => {
          this.setState(mapStateToProps(this.store.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const stateObj = mapStateToProps(this.store.getState())
        const dispatchObj = mapDispatchToProps(this.store.dispatch)

        return <Component {...this.props} {...stateObj} {...dispatchObj} />
      }
    }
  }
}
