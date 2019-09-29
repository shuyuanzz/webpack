import * as React from "react";
interface Iprops {
  optionList: Array<any>;
}
interface Istate {
  keyWords: string;
  showList: boolean;
  selectedIndex: number;
}
export default class AutoCompleteBox extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      keyWords: "",
      showList: false,
      selectedIndex: 0
    };
  }
  listClickHandle = (item: string) => {
    this.setState(prevState => ({
      keyWords: prevState.keyWords + item,
      showList: false
    }));
  };
  keyWordsHandle = (e: any) => {
    if (e.target.value.length === 0 || e.target.value.includes("@")) {
      this.setState({
        showList: false
      });
    } else {
      this.setState({
        showList: true
      });
    }
    this.setState({
      keyWords: e.target.value
    });
  };
  onKeyUp = (e: any) => {
    const { optionList } = this.props;
    if (this.state.showList) {
      switch (e.keyCode) {
        case 13:
          this.setState(prevState => ({
            keyWords: prevState.keyWords + optionList[prevState.selectedIndex],
            showList: false
          }));
          break;
        case 38:
            this.setState(prevState => {
              if (prevState.selectedIndex > 0) {
                return {
                  selectedIndex: prevState.selectedIndex - 1
                };
              } else {
                return {
                  selectedIndex: 2
                };
              }
            });
          break;
        case 40:
          this.setState(prevState => {
            if (prevState.selectedIndex < 2) {
              return {
                selectedIndex: prevState.selectedIndex + 1
              };
            } else {
              return {
                selectedIndex: 0
              };
            }
          });
          break;
        default:
          return;
      }
    }
  };
  onFocus = (e: any) => {
    if (e.target.value.includes("@")) return;
    if (this.state.keyWords.length > 0) {
      this.setState({
        showList: true,
        selectedIndex: 0
      });
    }
  };
  onBlur = () => {
    setTimeout(
      () =>
        this.setState({
          showList: false
        }),
      300
    );
  };
  render() {
    const { optionList } = this.props;
    const { keyWords, showList, selectedIndex } = this.state;
    return (
      <div className="ac-wapper">
        <h3>AutoComplete</h3>
        <input
          type="text"
          placeholder="please enter your email"
          className="auto-complete"
          value={keyWords}
          onChange={e => this.keyWordsHandle(e)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyUp={e => this.onKeyUp(e)}
        />
        {showList && (
          <ul className="list-wapper">
            {optionList.map((item, index) => (
              <li
                key={item}
                style={
                  index === selectedIndex ? { backgroundColor: "#afe0ec" } : {}
                }
                onClick={() => {
                  this.listClickHandle(item);
                }}
                onMouseOver={() => this.setState({ selectedIndex: index })}
              >
                {keyWords + item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
