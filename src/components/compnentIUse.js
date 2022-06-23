import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormInput from "../components/FormInput.js";
import CustomSelect from "../components/CustomSelect.js";
import ToggleSwitch from "../components/ToggleSwitch.js";
import Button from "../components/Button.js";
import Modal from "../components/Modal.js";
import "./styles.css";
function App() {
  const data = [
    {
      id: "1",
      name: "One"
    },
    {
      id: "2",
      name: "Two"
    },
    {
      id: "3",
      name: "Three"
    },
    {
      id: "4",
      name: "Four"
    }
  ];
  function handleChange(event) {
    console.log(event.target.value);
  }
  function onSelectChange(event) {
    console.log(event.target.value);
  }
  function onToggleChange(event) {
    console.log(event.target.checked);
  }
  return (
    <div className="App">
      <form>
        <Modal show={true} message={"Hello"}>
          <p>THIS IS A MODAL</p>
        </Modal>
        <FormInput type={"text"} onChange={handleChange} />
        <FormInput type={"email"} onChange={handleChange} />
        <div>
          <CustomSelect data={data} onSelectChange={onSelectChange} />
        </div>
        <div>
          <ToggleSwitch
            id="id"
            defaultChecked={false}
            disabled={false}
            Text={["Yes", "No"]}
            onToggleChange={onToggleChange}
          />
        </div>
        <Button variant="danger" size={"sm"} >Small Button</Button>
        <Button variant="primary" size={"lg"} >Smaller Button</Button>
        <Button variant="warning" size={"xs"} >Big Button</Button>
      </form>
    </div>
  );
}
