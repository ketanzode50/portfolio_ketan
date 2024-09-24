import React, { Component } from "react"
import ReactRoundedImage from "react-rounded-image"
import MyPhoto from "../Components/Photo.png"

export default class App extends Component {
  render() {
    return (
<ReactRoundedImage
  image={MyPhoto}
  roundedColor="#481E14"
  imageWidth="300"
  imageHeight="300"
  roundedSize="13"
  hoverColor="#F2613F"
/>
    )
  }
}