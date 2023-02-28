import PropTypes from 'prop-types'

// Hooks

import { useStickyState } from '../hooks'

function Dialogue({ props }) {
  const { id, isLoading, icon, title, toolbar, body, footer, onClose } = props

  const [maximased, setMaximased] = useStickyState(false, id)

  if (isLoading) return null

  return (
    <div
      id={id}
      key={id}
      className="modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      style={{ display: 'block' }}
      role="dialog"
      tabIndex="-1"
    >
      <div className={`modal-dialog ${maximased ? 'modal-fullscreen' : 'modal-dialog-scrollable modal-dialog-centered modal-xl'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex flex-row">
              <i className={`${icon} pt-1 me-3`} />
              <h5 className="modal-title">{title}</h5>
            </div>
            <div className="ml-auto d-flex flex-row">
              {toolbar}
              <button type="button" className="btn btn-sm" title="Maximise" aria-label="Maximise" onClick={() => setMaximased(!maximased)}>
                <i className="bi bi-arrows-fullscreen" />
              </button>
              <button type="button" title="Close dialogue" className="btn btn-sm me-0" aria-label="Close" onClick={onClose}>
                <i className="bi bi-x-lg" />
              </button>
            </div>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    </div>
  )
}

Dialogue.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string,
    toolbar: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }),
}

export default Dialogue
