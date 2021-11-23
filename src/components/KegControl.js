import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { v4 } from "uuid";
import Modal from "./Modal";
import keg1 from "./img/paul.png";
import keg2 from "./img/bud.png";
import keg3 from "./img/chim.png";
import keg4 from "./img/dog.png";
import keg5 from "./img/hoag.png";
import keg6 from "./img/blue.png";
import keg7 from "./img/crys.png";
import keg8 from "./img/alto.png";

const mainKegList = [
  {
    id: v4(),
    img: keg1,
    name: "Old German Paulie",
    description: "Banana, clean and fruity, robust",
    price: "$9",
    alevel: "5.6%",
    quantity: 0,
  },
  {
    id: v4(),
    img: keg2,
    name: "American Pride",
    description: "Light and slicky, smooth and frothy",
    price: "$3",
    alevel: "4.6%",
    quantity: 15,
  },
  {
    id: v4(),
    img: keg3,
    name: "Whatchemacallit beer",
    description: "Pungent and very spritzy",
    price: "$6",
    alevel: "6.3%",
    quantity: 11,
  },
  {
    id: v4(),
    img: keg4,
    name: "Moon Landing",
    description: "Strong, spicy and sharp, very fragrant",
    price: "$9",
    alevel: "8.9%",
    quantity: 2,
  },
  {
    id: v4(),
    img: keg5,
    name: "Old Dutch",
    description: "Horseblankety with elegant earthy touch",
    price: "$8",
    alevel: "4.9%",
    quantity: 5,
  },
  {
    id: v4(),
    img: keg6,
    name: "Blue Sorrow",
    description: "Sharp and citrucy",
    price: "$7",
    alevel: "3.9%",
    quantity: 0,
  },
  {
    id: v4(),
    img: keg7,
    name: "Lazer stare",
    description: "Springlike with juniper notes",
    price: "$7",
    alevel: "4.7%",
    quantity: 0,
  },
  {
    id: v4(),
    img: keg8,
    name: "It's party time!",
    description: "Newly-mown lawn and floral brilliant.",
    price: "$6",
    alevel: "3.5%",
    quantity: 0,
  },
];

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: mainKegList,
      selectedKeg: null,
      editing: false,
      show: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  handleClick = () => {
    if (this.state.selectedKeg != null) {
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
    if (newKeg.image === "") {
      newKeg.image = "./img/default.png";
    }
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({ mainKegList: newMainKegList, formVisibleOnPage: false });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  // handlePurchaseClick =() => {
  //   console.log("handlePurchaseClick reached!");
  //   this.setState({ purchasing: true });
  // };

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null,
    });
  };

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null,
    });
  };

  handlePurchaseKeg = () => {
    let purchaseKeg = this.state.mainKegList.filter(
      (keg) => keg.id === this.state.selectedKeg.id
    )[0];

    if (purchaseKeg.quantity <= 0) {
      this.showModal();
      alert(purchaseKeg.name + " - this keg is out of beer.");
    } else if (purchaseKeg.quantity === 10) {
      this.setState({ show: true})
      alert(purchaseKeg.name + " - this keg will be empty soon!");
      purchaseKeg = purchaseKeg.quantity--;
    } else {
      purchaseKeg = purchaseKeg.quantity--;

      this.setState({
        purchaseKeg: purchaseKeg,
      });
    }
  };

  handleRestockKeg = () => {
    let restockKeg = this.state.mainKegList.filter(
      (keg) => keg.id === this.state.selectedKeg.id
    )[0];
    restockKeg.quantity = 124;

    this.setState({
      restockKeg: restockKeg,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
          onClickingPurchase={this.handlePurchaseKeg}
          onClickingRestock={this.handleRestockKeg}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.mainKegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add keg";
    }
    return (
      <React.Fragment>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        {currentlyVisibleState}
        <div className="row justify-content-center">
          <button
            class="btn btn-success"
            style={{ width: "12rem", marginTop: "4rem" }}
            onClick={this.handleClick}
          >
            {buttonText}
          </button>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl;
