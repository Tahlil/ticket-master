'use client'
import React, { useState } from 'react'

import Scanner from 'react-webcam-qr-scanner'
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { Provider } from '../provider';
const ScanPage = () => {
  // const [result, setResult] = useState('')
  // const [facingMode, setFacingMode] = useState('environment')

  return (
    <div className='flex flex-col bg-gradient-to-br from-red-300 to-red-900'>
            <Scanner c
        onDecode={(result: any) => console.log({ result })}
        onScannerLoad={(mode: any) => console.log({ mode })}
        constraints={{
          audio: false,
          video: {
            facingMode: 'environment'
          }
        }}
        captureSize={{ width: 1280, height: 720 }}
      />
      <h1>
        Scanning..
      </h1>
      </div>
      
 
  )
}

export default ScanPage
