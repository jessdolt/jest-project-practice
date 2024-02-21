import { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setErrors] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )

        const data = await response.json()

        setUsers(data.map((user: { name: string }) => user.name))
      } catch (e) {
        setErrors("Errors fetching users")
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
