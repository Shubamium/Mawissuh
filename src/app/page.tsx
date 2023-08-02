import TitleHome from "./components/home/TitleHome"
import Profile from "./home/Profile"

export const revalidate = 10

export default function Home() {
  return (
    <div className="page">
		<TitleHome/>
		<Profile/>
	</div>
  )
}
