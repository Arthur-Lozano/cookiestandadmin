import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource'


export default function Header({ username, onLogout }) {
  const { user, login, logout } = useAuth();
  const { resource, loading, createResource, deleteResource } = useResource();
  return (
    <div className="inline">
      <header className="flex justify-between p-5 mb-10 bg-green-500">
        <h1 className="font-mono text-4xl font-bold drop-shadow-lg">Cookie Stand Admin</h1>

        <div className="flex">
          {user ? (
            <div>
              <h2>Welcome {user} </h2>
              <button onClick={logout} className="p-2 m-2 font-bold bg-white rounded-md hover:bg-blue-500 drop-shadow-lg">Logout</button>
            </div>
          ) : (

            <div>
              <button onClick={() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className="p-2 m-2 font-bold bg-white rounded-md hover:bg-blue-500 drop-shadow-lg">Login</button>
            </div>
          )}
          <Link href="/overview">
            <button className="p-2 m-2 font-bold bg-white rounded-md hover:bg-blue-500 drop-shadow-lg" href="about_us">Overview</button>
          </Link>
        </div>
      </header>

    </div>
  )
}