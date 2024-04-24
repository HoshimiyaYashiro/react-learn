'use client'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'
import { fetchCurrentUser } from './utils/amplifyClientUtils'
import { setAuthUser } from './lib/features/auth/authSlide'


export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
  useEffect(() => {
    const fetchAmplifyUser = async () => {
      const user = await fetchCurrentUser();
      storeRef.current?.dispatch(setAuthUser(user))
    }
    fetchAmplifyUser();
  })
  return <Provider store={storeRef.current}>{children}</Provider>
}