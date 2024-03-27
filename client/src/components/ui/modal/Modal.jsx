import { useEffect, useState } from 'react'
import { ButtonClose } from '../buttons/Buttons'
import classes from './Modal.module.scss'

export default function Modal({ open, onClose, children }) {
  const [modal, setModal] = useState(open)

  useEffect(() => {
    setModal(open)
  }, [open])

  function handleCloseModal() {
    document.body.style.overflow = 'scroll'
    setModal(false)
    onClose()
  }

  if (modal) document.body.style.overflow = 'hidden'

  if (modal)
    return (
      <div className={classes['overlay']} onClick={handleCloseModal}>
        <div className={classes['modal']}>
          <div
            className={classes['modal__content']}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={classes['modal__control']}>
              <ButtonClose onClick={handleCloseModal} />
            </div>
            {children}
          </div>
        </div>
      </div>
    )
}
