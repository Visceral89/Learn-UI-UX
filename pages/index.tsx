import Head from "next/head";
import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import crowd from "../public/crowd.png";

export default function Home() {
	return (
		<>
			<Head>
				<title>Learn UI/UX Design</title>
				<meta name="description" content="Learn UI UX Design" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex">
				<Logo /> <Navbar />
			</div>
			<div className="flex grow justify-center mt-14">
				<Image
					src={crowd}
					alt="crowd of people"
					width={515}
					height={309.7}
					className="justify-self-auto"
				/>
			</div>
			<div className="flex flex-col items-center gap-12 mt-2">
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-8xl font-bold">LEARN UI/UX DESIGN</h1>
					<h2 className="text-3xl text-white/75">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</h2>
				</div>

				<div className="flex flex-row items-start gap-4">
					<input
						className="flex flex-row items-start pt-4 pb-4 pl-4 pr-64 gap-2 rounded-lg border-2 border-slate-100 bg-transparent
            text-white/75 text-lg placeholder-white/75"
						type="text"
						id="name"
						placeholder="ENTER MAIL"
					/>

					<button className="flex flex-row items-start px-8 py-4 bg-slate-50 rounded-lg text-violet-800 uppercase font-bold text-lg">
						get started
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center text-white/60 text-lg uppercase mt-8 font-normal">
				<p>join now</p>
			</div>
		</>
	);
}


