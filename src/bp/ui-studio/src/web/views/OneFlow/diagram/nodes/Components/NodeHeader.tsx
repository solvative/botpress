import { Button, Icon, Intent, Tooltip } from '@blueprintjs/core'
import { lang } from 'botpress/shared'
import cx from 'classnames'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'

import style from './style.scss'

interface Props {
  setExpanded?: (expanded: boolean) => void
  expanded?: boolean
  defaultLabel: string
  handleContextMenu?: (e: SyntheticEvent) => void
  children?: any
  className?: string
}

const NodeHeader: FC<Props> = ({ setExpanded, expanded, defaultLabel, handleContextMenu, children, className }) => {
  const [startMouse, setStartMouse] = useState({ x: 0, y: 0 })
  const icon = expanded ? 'chevron-down' : 'chevron-right'

  return (
    <div className={cx(style.headerWrapper, className)}>
      <Button
        icon={setExpanded ? icon : null}
        onClick={e => {
          if (e.screenX - startMouse.x === 0 && e.screenY - startMouse.y == 0) {
            setExpanded && setExpanded(!expanded)
          }
        }}
        onMouseDown={e => setStartMouse({ x: e.screenX, y: e.screenY })}
        className={style.button}
        onContextMenu={e => handleContextMenu && handleContextMenu(e)}
      >
        {defaultLabel}
      </Button>
      {children}
    </div>
  )
}

export default NodeHeader
