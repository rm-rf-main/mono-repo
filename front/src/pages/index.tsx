import { res } from "@kl/back"
import type { NextPage } from "next"

const Home: NextPage = () => {
	return <div>{res.name}</div>
}

export default Home
