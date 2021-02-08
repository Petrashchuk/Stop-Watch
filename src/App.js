import React, { useState, useCallback } from 'react'
import './App.css'
import ButtonComponent from './components/ButtonComponent'

function App () {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  let { ms: updateMS, s: updateS, m: updateM, h: updateH } = time
  const run = useCallback(() => {
    if (updateM === 60) {
      updateH++
      updateM = 0
    }
    if (updateS === 60) {
      updateM++
      updateS = 0
    }
    if (updateMS === 100) {
      updateS++
      updateMS = 0
    }
    updateMS++
    return setTime({ ms: updateMS, s: updateS, m: updateM, h: updateH })
  }, [time])

  const onStart = useCallback(() => {
    run()
    setInterv(setInterval(run, 10))
    setStatus(1)
  }, [time])

  const onWait = useCallback(() => {
    clearInterval(interv)
    setStatus(0)
  }, [interv])

  const onClear = useCallback(() => {
    clearInterval(interv)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
    setStatus(0)
  }, [interv])

  const showTimeNow = useCallback(function () {
    const valueH = time.h >= 10 ? time.h : '0' + time.h.toString()
    const valueM = time.m >= 10 ? time.m : '0' + time.m.toString()
    const valueS = time.s >= 10 ? time.s : '0' + time.s.toString()
    const valueMS = time.ms >= 10 ? time.ms : '0' + time.ms.toString()
    return <>{valueH}:{valueM}:{valueS}:{valueMS}</>
  }, [time])

  return (
    <div className={'wrapper'}>
      <div>
        <h1 className={'title'}>STOPWATCH</h1>
        <div className={'stopWatch-container'}>
          <div className={'stopWatch-container_time'}>
            <div>
              <div className={'timer_block'}>
                <h1>{showTimeNow()}</h1>
              </div>
              <div className={'container_btn'}>
                <ButtonComponent variant="warning" handleClick={onClear}
                                 value={'Clear'} />
                {status === 0 ?
                  <ButtonComponent variant="success" handleClick={onStart}
                                   value={'Go!'} /> :
                  <ButtonComponent variant="success" handleClick={onWait}
                                   value={'Wait'} />}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
