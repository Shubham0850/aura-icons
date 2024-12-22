import React from 'react'
import Divider from './Divider'

function Footer() {
	return (
		<div className="pt-[50px]">
			<Divider category="" />
			<div className="flex flex-col items-center justify-center -mb-[100px]">
				<section className="flex flex-col items-center text-center py-16">
					<div className="mb-8">
						<img
							className="w-auto h-4 lg:h-8"
							src="https://www.auraui.com/logo-light.png"
							alt="Aura UI Logo"
						/>
					</div>

					{/* Heading */}
					<h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
						Open source icons.
					</h1>
					<p className="text-xl text-gray-400 mb-10">
						perfectly aligned.
					</p>
				</section>

				<h1 className="text-[14rem] font-extrabold text-gray-200 tracking-tighter">auraUI-icons</h1>
			</div>
		</div>
	)
}

export default Footer