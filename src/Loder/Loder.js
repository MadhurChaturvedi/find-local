import React from 'react'
import "./Loder.css"
import GearIcon from '@rsuite/icons/Gear';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';

export default function Loder() {
  return (
    <div className="icon-example-list">
    <GearIcon spin style={{ fontSize: '2em' }} />
    {/* <SpinnerIcon pulse style={{ fontSize: '2em' }} /> */}
  </div>
  )

}
