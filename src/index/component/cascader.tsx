import * as React from 'react';
import '../../../styleSheet/cascader.css'
import { IoIosArrowDown } from 'react-icons/io';
import CascaderSubList from './cascaderSubList'
interface Istate {
    arrDown:boolean;
    resultValue: string;
}
export default class Cascader extends React.Component<{},Istate> {
    constructor(props: {}) {
        super(props)
        this.state = {
            arrDown: true,
            resultValue: ''
        }
    }
    changeArrDirection = () => {
        this.setState(prevState => ({
            arrDown: !prevState.arrDown
        }))
    }
    changeValue = (value:string) => {
        this.setState({
            resultValue: value,
            arrDown: true,
        })
    }
    render() {
        const {arrDown , resultValue} = this.state;
        return (
        <div className="cascader-wapper">
            <h3>Cascader</h3>
            <input type="text" placeholder="Please select" className="cascader-input" value={resultValue} onClick={this.changeArrDirection} readOnly/>
            <IoIosArrowDown className="cascader-input-arr"  style={arrDown ? {} : {transform: 'rotate(180deg)'}}/>
            <br/>
            <CascaderSubList showList={!arrDown} changeValue={this.changeValue}/>
        </div>
        );
    }
}