import Link from 'next/link';
import { FaGithub, FaLaptop } from 'react-icons/fa';

export default function Navbar() {
	return (
		<div className='navbar bg-base-300'>
			<div className='navbar-start'></div>
			<div className='navbar-center'>
				<Link href='/'>
					<div className='btn btn-ghost text-xl'>Erb.log</div>
				</Link>
			</div>
			<div className='navbar-end'>
				<div className='btn btn-ghost'>
					<FaGithub />
				</div>
				<div className='btn btn-ghost'>
					<FaLaptop />
				</div>
			</div>
		</div>
	);
}
