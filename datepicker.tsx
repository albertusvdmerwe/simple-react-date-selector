import React, { Component } from "react";
import Pickers from "./subcomponents/pickers";
import DateInputField from "./subcomponents/input-field";
import GeneralModal from "./general-modal/general-modal";
import { stylesObjects } from "./styles/styles-objects";
import { defaultState } from "./state";
const { header, body, container, footer } = stylesObjects;

interface Props {
  onChange: (fullDate: string) => void;
  placeholder: string;
  value: string;
  headerStyles?: object;
  bodyStyles?: object;
  containerStyles?: object;
  footerStyles?: object;
}

interface State {
  year: string;
  month: string;
  day: string;
  modalVisible: boolean;
}

class Datepicker extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = defaultState;
    this.closeModal = this.closeModal.bind(this);
    this.handleItemSelected = this.handleItemSelected.bind(this);
    this.handleDateInputFieldClicked=this.handleDateInputFieldClicked.bind(this);
  }

  getSetFullDate(): void {
    let fullDate = "";
    const { year, month, day } = this.state;
    const { onChange } = this.props;

    if (year && month && day) {
      fullDate = `${year}-${month}-${day}`;
    }

    if (fullDate !== "") {
      this.setState(defaultState, () => onChange(fullDate));
    }
  }

  closeModal(): void {
    this.setState(defaultState);
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

  handleDateInputFieldClicked():void{
    this.setState({ modalVisible: true });
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
