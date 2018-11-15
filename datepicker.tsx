import React, { Component } from "react";
import Pickers from "./subcomponents/pickers";
import DateInputField from "./subcomponents/input-field";
import GeneralModal from "./general-modal/general-modal";
import {deepClone} from "./helpers/objects.helpers";
import { stylesObjects } from "./styles/styles-objects";
import { defaultState } from "./state";
const { header, body, container, footer } = stylesObjects;

interface Props {
  onChange: (fullDate: string) => void;
  onOpened?: () => void;
  onClosed?: () => void;
  placeholder: string;
  value: string;
  headerStyles?: object;
  bodyStyles?: object;
  containerStyles?: object;
  footerStyles?: object;
  visible?:boolean;
}

interface State {
  year: string;
  month: string;
  day: string;
  modalVisible: boolean;
}

class Datepicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = defaultState;
    this.closeModal = this.closeModal.bind(this);
    this.handleItemSelected = this.handleItemSelected.bind(this);
    this.handleDateInputFieldClicked = this.handleDateInputFieldClicked.bind(this);
  }

  checkAndInvokeListeners(): void {
    const { onClosed = null, onOpened = null } = this.props;
    const { modalVisible } = this.state;

    if (typeof onClosed === "function" && modalVisible === false) {
      onClosed();
    }

    if (typeof onOpened === "function" && modalVisible === true) {
      onOpened();
    }
  }

  getSetFullDate(): void {
    let fullDate = "";
    const { year, month, day } = this.state;
    const { onChange } = this.props;

    if (year && month && day) {
      fullDate = `${year}-${month}-${day}`;
    }

    if (fullDate !== "") {
      this.setState(defaultState, () => {
        onChange(fullDate);
        this.checkAndInvokeListeners();
      });
    }
  }

  closeModal(): void {
    this.setState(defaultState, this.checkAndInvokeListeners);
  }

  showModal():void{
    const newState=deepClone(defaultState);
    newState.modalVisible=true;
  }

  handleItemSelected(value: string, type: string): void {
    if (type === "year") {
      this.setState({ year: value }, this.getSetFullDate);
    }

    if (type === "month") {
      this.setState({ month: value }, this.getSetFullDate);
    }

    if (type === "day") {
      this.setState({ day: value }, this.getSetFullDate);
    }
  }

  handleDateInputFieldClicked(): void {
    this.setState({ modalVisible: true }, this.checkAndInvokeListeners);
  }

  componentDidMount() {

    /*Check if the developer set it to be visible explicitly.*/

    const {visible=null}=this.props;
    if(typeof visible==="boolean")
    {
      
    }
  }
  

  render() {
    const {
      placeholder,
      value,
      headerStyles = header,
      bodyStyles = body,
      containerStyles = container,
      footerStyles = footer
    } = this.props;

    const { modalVisible } = this.state;
    const { handleItemSelected, closeModal } = this;

    return (
      <div className="simple-react-date-selector">
        <GeneralModal visible={modalVisible} onClick={closeModal}>
          <Pickers
            {...this.state}
            {...{
              bodyStyles,
              containerStyles,
              footerStyles,
              headerStyles
            }}
            onChange={handleItemSelected}
          />
        </GeneralModal>
        <DateInputField
          placeholder={placeholder}
          onClick={this.handleDateInputFieldClicked}
          value={value}
        />
      </div>
    );
  }
}

export default Datepicker;
