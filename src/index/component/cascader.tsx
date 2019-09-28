import * as React from 'react';
import '../../../styleSheet/cascader.css'
export default class Cascader extends React.Component {
    render() {
        return (
        <div className="cascader-wapper">
            <h3>Cascader</h3>
            <input type="text" placeholder="Please select" className="cascader-input"/>
        </div>
        );
    }
}