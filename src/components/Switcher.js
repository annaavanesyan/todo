import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';

import SwitcherModes from '../constants/SwictherModes';

class Switcher extends Component {
    state = { mode: SwitcherModes.LISTENER };
    render() {
        return (
            <div className="swicther-wrapper">
                <div>Listener</div>
                <Switch color="primary" />
                <div>Emitter</div>
            </div>
        );
    }
}

export default Switcher;
