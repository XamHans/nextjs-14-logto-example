
import { auth } from '@/lib/auth'
import { signIn, signOut } from '@logto/next/server-actions'
import { UserAvatar } from './client-components/user-avatar'
import { logtoConfig } from './logto'

export const Navbar = async () => {
  const { userId, userEmail } = await auth()
  console.log('userId', userId)
  console.log('userEmail', userEmail)
 
  return (
    <div className="flex items-center border-b bg-white p-2 shadow-sm">
      <header className="container mx-auto flex items-center justify-between py-2">
        <div className="text-xl font-bold text-blue-600">LogTo Example</div>
        <nav>
          <UserAvatar
            userEmail={userEmail}
            onSignIn={async () => {
              'use server'

              await signIn(logtoConfig)
            }}
            onSignOut={async () => {
              'use server'

              await signOut(logtoConfig)
            }}
          />
        </nav>
      </header>
    </div>
  )
}
