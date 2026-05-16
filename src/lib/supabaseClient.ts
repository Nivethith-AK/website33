import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

const createNoopResult = (errorMessage: string) => Promise.resolve({ data: null, error: { message: errorMessage } })

const noopAuth = {
  signOut: () => createNoopResult('Supabase is not configured.'),
  getSession: async () => ({ data: { session: null }, error: null }),
  onAuthStateChange: () => ({
    data: { subscription: { unsubscribe: () => {} } },
  }),
  signInWithPassword: () => createNoopResult('Supabase is not configured.'),
}

const noopStorageBucket = {
  upload: async () => ({ data: null, error: { message: 'Supabase is not configured.' } }),
  remove: async () => ({ data: null, error: { message: 'Supabase is not configured.' } }),
  getPublicUrl: () => ({ data: { publicUrl: '' } }),
}

const noopStorage = {
  from: () => noopStorageBucket,
}

const noopFrom = () => ({
  insert: async () => ({ data: null, error: { message: 'Supabase is not configured.' } }),
})

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : {
      auth: noopAuth,
      storage: noopStorage,
      from: noopFrom,
    } as any
