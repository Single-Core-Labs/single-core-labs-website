import { createClient } from '@supabase/supabase-js'
import fs from 'node:fs/promises'

async function loadEnv() {
  try {
    const content = await fs.readFile('.env', 'utf-8')
    for (const line of content.split('\n')) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
      if (match) {
        const key = match[1]
        let val = match[2] || ''
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1)
        process.env[key] = val
      }
    }
  } catch (err) {
    console.error('Error loading .env:', err)
  }
}

async function main() {
  await loadEnv()
  const url = process.env.VITE_SUPABASE_URL
  const key = process.env.VITE_SUPABASE_ANON_KEY
  
  if (!url || !key) {
    console.error('Missing Supabase credentials in .env')
    return
  }

  const supabase = createClient(url, key)
  console.log('Querying blog_posts table...')
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
  
  if (error) {
    console.error('Query error:', error)
  } else {
    console.log(`Successfully fetched ${data.length} posts:`)
    console.log(JSON.stringify(data, null, 2))
  }
}

main()
