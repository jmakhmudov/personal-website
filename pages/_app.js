import '@/styles/globals.css'
import '@/styles/Components.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from '@/components/supabase'

function MyApp({ Component, pageProps }) {
  

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
export default MyApp
