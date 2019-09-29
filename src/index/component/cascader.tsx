import * as React from 'react';
import '../../../styleSheet/cascader.css'
import { IoIosArrowDown} from 'react-icons/io';
import CascaderSubList from './cascaderSubList'
interface Istate {
    arrDown:boolean
}
export default class Cascader extends React.Component<{},Istate> {
    constructor(props: {}) {
        super(props)
        this.state = {
            arrDown: true
        }
    }
    changeArrDirection = () => {
        this.setState(prevState => ({
            arrDown: !prevState.arrDown
        }))
    }
    render() {
        const {arrDown} = this.state;
        return (
        <div className="cascader-wapper">
            <h3>Cascader</h3>
            <input type="text" placeholder="Please select" className="cascader-input" onClick={this.changeArrDirection}/>
            <IoIosArrowDown className="cascader-input-arr"  style={arrDown ? {} : {transform: 'rotate(180deg)'}}/>
            <CascaderSubList showList={!arrDown}/>
        </div>
        );
    }
}