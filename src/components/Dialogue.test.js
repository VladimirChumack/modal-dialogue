import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Dialogue from './Dialogue'

const onClose = () => {}
const onSave = () => {}

it('Dialogue component', () => {
  const { container } = render(
    <Dialogue
      props={{
        id: 'dialogue1',
        icon: 'bi-123',
        toolbar: 'toolbar',
        title: 'title',
        body: 'body',
        footer: 'footer',
        onClose,
        onSave,
      }}
    />
  )
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.getElementsByClassName('bi-123').length).toBe(1)
  expect(screen.getByText('toolbar')).toBeInTheDocument()
  expect(screen.getByText('title')).toBeInTheDocument()
  expect(screen.getByText('body')).toBeInTheDocument()
  expect(screen.getByText('footer')).toBeInTheDocument()
})
