import { createClient } from '@supabase/supabase-js'
import WebSocket from 'ws'

const url = process.env.VITE_SUPABASE_URL
const key = process.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.error('❌ Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY first')
  process.exit(1)
}

const supabase = createClient(url, key, {
  realtime: { transport: WebSocket },
})

async function main() {
  console.log('🔍 Testing Research Collective pipeline...\n')

  // 1. Test connection (select limit 1 to check table exists)
  console.log('1️⃣  Testing Supabase connection...')
  const { error: pingErr } = await supabase.from('research_collective_applications').select('id').limit(1)
  if (pingErr) {
    console.error(`   ❌ Table error: ${pingErr.message}`)
    console.log('   ➡  Run the CREATE TABLE SQL from SQL Editor first')
    process.exit(1)
  }
  console.log('   ✅ Table exists and accessible\n')

  // 2. Insert test application (no .select() — anon only has INSERT)
  console.log('2️⃣  Inserting test application...')
  const testPayload = {
    first_name: 'Test',
    last_name: 'User',
    email: 'test@singlecorelabs.com',
    research_area: 'Machine Learning',
    affiliation: 'Test University',
    statement: 'This is a test submission to verify the pipeline works end-to-end.',
    work_link: 'https://github.com/test',
  }

  const { error: insertErr, status } = await supabase
    .from('research_collective_applications')
    .insert([testPayload])

  if (insertErr) {
    console.error(`   ❌ Insert failed: ${insertErr.message}`)
    process.exit(1)
  }
  console.log(`   ✅ Insert succeeded (HTTP ${status})\n`)

  console.log('🎉 All tests passed! Pipeline is working.')
  console.log('   Check your email / ntfy / Slack for the webhook notification.')
}

main().catch((err) => {
  console.error('❌ Test crashed:', err)
  process.exit(1)
})
