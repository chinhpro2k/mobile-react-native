import React, { FunctionComponent } from 'react'
import { Box } from 'native-base'
import Text from '../Text'

type Props = {
  type: 'success' | 'error'
  content: string
}

const ContentToast: FunctionComponent<Props> = (props: Props) => {
  const { type, content } = props
  return (
    <Box
      bg={type === 'success' ? 'success.500' : 'danger.500'}
      px="3"
      py="2"
      rounded="sm"
      mb={5}
    >
      <Text textContent={content} fontSize="md" />
    </Box>
  )
}

export default ContentToast
