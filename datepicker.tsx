import React, { Component } from "react";
import Pickers from "./subcomponents/pickers";
import DateInputField from "./subcomponents/input-field";
import GeneralModal from "./general-modal/general-modal";
import { deepClone } from "./helpers/objects.helpers";
import { stylesObjects } from "./styles/styles-objects";
import { defaultState } from "./state";
const { header, body, container, footer } = stylesObjects;

interface Props {
  onChange: (fullDate: string) => void;
  placeholder: string;
  value: string;
  onOpened?: () => void;
  onClosed?: () => void;
  headerStyles?: object;
  bodyStyles?: object;
  containerStyles?: object;
  footerStyles?: object;
  visible?: boolean;
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

  showModal(): void {
    let newState: object = deepClone(defaultState);
    newState = Object.assign({}, newState, { modalVisible: true });
    this.setState(newState, this.checkAndInvokeListeners); 
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

  updateDatePickerVisibility():void{
    const { visible = null } = this.props;
    if (typeof visible === "boolean") {
      
      if(visible===true)
      {
        this.showModal();
      }

      if(visible===false)
      {
        this.closeModal();
      }
    }
  }


  componentDidUpdate(prevProps) {
    
    if(this.props.visible!==prevProps.visible)
    {
      this.updateDatePickerVisibility();
    }
  }

  render() {
    const {
      placeholder,
      value,
      headerStyles = header,
      bodyStyles = body,
      containerStyles = container,
      footerStyles = footer,
      visible=null
    } = this.props;

    const { modalVisible } = this.state;
    const { handleItemSelected, closeModal } = this;

    return (
      <div className="simple-react-date-selector">
        <GeneralModal visible={!visible?modalVisible:visible} onClick={closeModal}>
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
