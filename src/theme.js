import { extendTheme } from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

export default function themeSetup() {// This function creates a set of function that helps us create multipart component styles.
  // const helpers = createMultiStyleConfigHelpers(['modal', 'content'])

  const baseStyle = definePartsStyle(
    {
      dialogContainer: {
        maxHeight: '100vh',
        overflow: 'hidden',
      },
      dialog: {
        height: '86%',
        overflow: 'auto',
        maxWidth: '1024px',        
      },
    }
  )

  const Modal = defineMultiStyleConfig({ baseStyle })

  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }

  const theme = extendTheme({
    colors,
    components: {
      Modal,
    }
  })

  return theme
}