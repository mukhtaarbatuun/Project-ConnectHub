import { supabase } from '../lib/supabaseClient'

// Get Posts
export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles (username, avatar_url),
      likes (user_id)
    `)
    .order('created_at', { ascending: false })

  if (error) throw error

  return data
}

// Create Post
export async function createPost(content, imageFile) {
  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user

  if (!user) throw new Error('Not authenticated')

  let image_url = null

  if (imageFile) {
    const filePath = `${user.id}/${Date.now()}-${imageFile.name}`

    const { error: uploadError } = await supabase.storage
      .from('post-images')
      .upload(filePath, imageFile)

    if (uploadError) throw uploadError

    const { data } = supabase.storage
      .from('post-images')
      .getPublicUrl(filePath)

    image_url = data.publicUrl
  }

  const { data, error } = await supabase.from('posts').insert({
    user_id: user.id,
    content,
    image_url
  })

  if (error) throw error

  return data
}

// Like Post
export async function likePost(postId) {
  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user

  if (!user) throw new Error('Not authenticated')

  const { error } = await supabase.from('likes').insert({
    user_id: user.id,
    post_id: postId
  })

  if (error) throw error
}

// Unlike Post
export async function unlikePost(postId) {
  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user

  if (!user) throw new Error('Not authenticated')

  const { error } = await supabase
    .from('likes')
    .delete()
    .eq('user_id', user.id)
    .eq('post_id', postId)

  if (error) throw error
}