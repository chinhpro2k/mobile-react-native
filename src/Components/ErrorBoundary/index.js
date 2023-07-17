import OhNo from '@/Screens/OhNo'
import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return (
        <OhNo
          resetError={() => {
            this.setState({ hasError: false })
          }}
        />
      )
    }

    return <>{this.props.children}</>
  }
}
