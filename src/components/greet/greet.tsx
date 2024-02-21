import { GreetProps } from "./greet.types"

const Greet: React.FC<GreetProps> = ({ name }) => {
  return <h1>Hello {name ? name : "Guest"}</h1>
}

export default Greet
