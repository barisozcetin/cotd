import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(fish => (
          <EditFishForm key={key} fish={this.props.fishes[key]} />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
