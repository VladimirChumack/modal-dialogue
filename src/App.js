import { useState, useEffect } from 'react'
import { Dialogue, CloseButton, SaveCancel } from './components'

function App() {
  const [showDialogue, setShowDialogue] = useState()

  const onClose = () => setShowDialogue(undefined)
  const onSave = () => setShowDialogue(undefined)
  const onCancel = () => setShowDialogue(undefined)

  // Closes dialogue on escape
  useEffect(() => {
    const closeDialogue = (e) => {
      if (e.keyCode === 27) onClose()
    }
    window.addEventListener('keydown', closeDialogue)
    return () => window.removeEventListener('keydown', closeDialogue)
  }, [])

  const toolbar = (
    <button type="button" className="btn btn-sm border me-2" title="Refresh" aria-label="Refresh">
      <i className="bi bi-arrow-repeat me-2" />
      Refresh
    </button>
  )
  const body = (
    <div className="container-fluid p-5" align="center">
      Press ESC to close dialogue
    </div>
  )

  const footer = <CloseButton props={{ onClose }} />

  const footer2 = <SaveCancel props={{ onSave, onCancel }} />

  const dialogue1 =
    showDialogue === 'dialogue1' ? (
      <Dialogue
        props={{
          id: 'dialogue1',
          icon: 'bi-123',
          toolbar,
          title: 'Dialogue 1',
          body,
          footer,
          onClose: () => setShowDialogue(undefined),
        }}
      />
    ) : null

  const dialogue2 =
    showDialogue === 'dialogue2' ? (
      <Dialogue
        props={{
          id: 'dialogue2',
          icon: 'bi-box',
          title: 'Dialogue 2',
          body,
          footer,
          onClose: () => setShowDialogue(undefined),
        }}
      />
    ) : null

  const dialogue3 =
    showDialogue === 'dialogue3' ? (
      <Dialogue
        props={{
          id: 'dialogue3',
          title: 'Dialogue 3',
          body,
          footer: footer2,
          onClose: () => setShowDialogue(undefined),
        }}
      />
    ) : null

  return (
    <>
      <div className="container-fluid p-5">
        <h2>Simple and reusable React Modal Dialogue created using Bootstrap</h2>
        <ul>
          <li>Customisable icon</li>
          <li>Customisable toolbar</li>
          <li>Customisable body</li>
          <li>Customisable footer</li>
          <li>Close button</li>
          <li>Maximise button</li>
          <li>State is saved in the localstore</li>
        </ul>
      </div>
      <div className="container-fluid pt-5" align="center">
        <p>Click on the button below to see the dialogue</p>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary" onClick={() => setShowDialogue('dialogue1')}>
            Dialogue 1
          </button>
          <button type="button" className="btn btn-primary" onClick={() => setShowDialogue('dialogue2')}>
            Dialogue 2
          </button>
          <button type="button" className="btn btn-primary" onClick={() => setShowDialogue('dialogue3')}>
            Dialogue 3
          </button>
        </div>
      </div>
      {dialogue1}
      {dialogue2}
      {dialogue3}
      <div className="container-fluid pt-5" align="center">
        <a href="https://www.linkedin.com/in/vchumack/">Created by Vladimir Chumack</a>
      </div>
    </>
  )
}

export default App
