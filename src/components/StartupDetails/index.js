import React, { Component } from 'react'

class StartupDetails extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                StartupDetails {match.params.id}
            </div>
        )
    }
}

export default StartupDetails
