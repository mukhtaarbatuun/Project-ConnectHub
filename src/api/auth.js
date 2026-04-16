import { supabase } from '../lib/supabaseClient'

// Register
export async function registerUser(email, password, username) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) throw error

  const user = data.user

  // create profile
  await supabase.from('profiles').insert({
    id: user.id,
    username
  })

  return data
}

// Login
export async function loginUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error

  return data
}

// Get Profile
export async function getProfile() {
  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user

  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error) throw error

  return data
}