import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import CloseButton from './CloseButton'

const onClose = () => {}

it('CloseButton component', () => {
  render(<CloseButton props={{ onClose }} />)
  expect(screen.getByText('Close')).toBeInTheDocument()
})
