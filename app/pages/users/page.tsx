import { GetServerSideProps, NextPage } from 'next'

interface User {
  id: number;
  name: string;
}

interface UsersPageProps {
  users: User[]
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
      props: { users }
    }
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return {
      props: { users: [] }
    }
  }
}

export default UsersPage