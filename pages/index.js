import { useEffect, useState } from 'react'
import * as nearAPI from 'near-api-js'

export default function Home() {
  const [near, setNear] = useState();

  const getData = async () => {
    const config = {
      networkId: "testnet",
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()
    };

    const _near = await nearAPI.connect(config);
    setNear(_near)
  }

  useEffect(() => {
    getData()
  })

  return (
    <div>
        {JSON.stringify(near)}
    </div>
  )
}
