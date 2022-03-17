import React, { useState } from "react"
import "./App.css"
import SignaturePad from "react-signature-canvas"

import {
  ChakraProvider,
  Button,
  Input,
  Progress,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

function App() {
  const [showForm, setShowForm] = useState(false)
  const showForm1 = () => {
    setShowForm(!showForm)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef() //useRef returns a mutable(liable to change) ref object whose .current property is initialized to the passed argument (initialValue).Reference of the componet that has focus on when the modal opens
  const finalRef = React.useRef() //receives focus when the modal closes.

  const clear = () => SignaturePad.get.clear()
  return (
    <ChakraProvider>
      <div className="wrapper">
        <h1>Form Submit</h1>
        <Button onClick={showForm1} colorScheme="blue" variant="solid" isActive>
          Sign Here
        </Button>

        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Input Credentials:</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder="Type Here" />
                <FormLabel>Company(optional)</FormLabel>
                <Input ref={initialRef} placeholder="Type Here" />

                <SignaturePad
                  canvasProps={{
                    className: "signatureCanvas",
                  }}
                />

                <p>
                  <Progress size="xs" isIndeterminate hasStripe />
                  Waiting for <strong>Persons</strong> signature
                </p>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
                className="closeButton"
              >
                Close
              </Button>
              <Button variant="ghost" className="clearButton">
                Clear
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {showForm && (
          <form>
            <div className="signaturePic"></div>
            <fieldset>
              <label>
                <p>Complete Name</p>
                <Input variant="outline" placeholder="Type Here" />
                <p>Title</p>
                <Input variant="outline" placeholder="Type Here" />
                <p>Company (optional)</p>
                <Input variant="outline" placeholder="Type Here" />
              </label>

              <p>
                <Progress size="xs" isIndeterminate hasStripe />
                Waiting for <strong>Persons</strong> signature
              </p>
            </fieldset>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </div>
    </ChakraProvider>
  )
}
export default App

// class buttonToggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isToggleOn: true }

//     //This binding is necessary to make 'this' work in the call back
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }))
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     )
//   }
// }
// export default buttonToggle
