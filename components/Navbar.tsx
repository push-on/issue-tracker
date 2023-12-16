import { AiFillBug } from "react-icons/ai"
import Link from "next/link"

export default function Navbar() {
	const links = [
		{ label: "Dashboard", href: "/", },
		{ label: "Issues", href: "/issues", }
	]
	return (
		<nav className="flex space-x-6 border-b border-zinc-700 mb-5 px-5 h-14 items-center">
			<Link href="/"><AiFillBug /></Link>
			<ul className="flex space-x-6">
				{
					links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="text-stone-300 hover:text-white transition-colors">
								{link.label}
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}
