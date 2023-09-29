import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  createStylesContext,
  useMultiStyleConfig,
  Spinner
} from '@chakra-ui/react'

import Lorem from 'react-lorem-component'

const [StylesProvider] = createStylesContext('Menu');


export default function Temp() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const styles = useMultiStyleConfig('Modal', {
    variant: 'no-scroll',
  })

  return (
    <div className="my-thing">
      <h1>Hello, Igora</h1>

      <div className="map">
        <video className="bg-video" autoPlay muted loop>
          <source type='video/mp4' src="koi.mp4" />
        </video>        
      </div>

      <div className="btn-wrapper">
        <button className="link" onClick={onOpen}>open</button>
      </div>

      <StylesProvider value={styles.modal}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent sx={{'--chakra-sizes-md': '1024px'}}>
            <ModalHeader>Открой еще раз, и будет новый контент</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="modal-flex">
                <div className="modal__img-wrap">
                  <img src="https://picsum.photos/700/467" className="modal-img"/>                  
                  <Spinner color='red.500' className="modal-spinner"/>
                </div>
                <Lorem count={5} seed={Math.floor(Math.random() * 100)}/>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </StylesProvider>
    </div>
  )
}