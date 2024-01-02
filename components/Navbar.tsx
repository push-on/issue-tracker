'use client'

import { AiFillBug } from "react-icons/ai"
import Link from "next/link"
import { usePathname } from "next/navigation"
import classnames from "classnames"

export default function Navbar() {
	const curretPath = usePathname()

	const links = [
		{ label: "Dashboard", href: "/", },
		{ label: "Issues", href: "/issues", }
	]
	return (
		<nav className="flex space-x-6 border-b border-zinc-700 mb-5 px-5 h-14 items-center">
			<Link href="/"><AiFillBug size={24} /></Link>
			<ul className="flex space-x-6">
				{
					links.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={classnames({
									"text-zinc-100": link.href === curretPath,
									"text-zinc-400": link.href !== curretPath,
									"hover:text-blue-400 transition-colors": true,
								})}>
								{link.label}
							</Link>
						</li>
					))
				}
			</ul>
		</nav >
	)
}
