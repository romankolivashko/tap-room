import React from "react";
import { v4 } from "uuid";
import keg from './img/keg.png';


const mainKegList = [
  {
    id: v4(),
    img: keg,
    name: 'Morning Sunshine',
    description: '',
    quantity: 0,
  },
  {
    id: v4(),
    img: keg,
    name: 'Daily Booster',
    description: '',
    quantity: 15,
  },
  {
    id: v4(),
    img: keg,
    name: 'Noon upper',
    description: '',
    quantity: 11,
  },
  {
    id: v4(),
    img: keg,
    name: 'Moon Landing',
    description: '',
    quantity: 2,
  },
  {
    id: v4(),
    img: keg,
    name: 'Blue Sorrow',
    description: '',
    quantity: 5,
  },
  {
    id: v4(),
    img: keg,
    name: 'Coming Soon!',
    description: '',
    quantity: 0,
  }
];

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: mainKegList,
      selectedKeg: null,
      editing: false,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => {
      const newMainKegList = this.state.mainKegList.concat(newKeg);
      this.setState({ mainKegList: newMainKegList, formVisibleOnPage: false });
  };

  handleChangeSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter((keg) => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  };

  handleEditClick = () => {
    this.setState({editing: true });
  };

  // handlePurchaseClick =() => {
  //   console.log("handlePurchaseClick reached!");
  //   this.setState({ purchasing: true });
  // };

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList.fileter((keg) => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null,
    });
  }



}


export default KegControl;