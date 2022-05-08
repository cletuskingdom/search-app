import Head from "next/head";
import Script from "next/script";

export default function Home() {
	return (
		<div>
			<Head>
				<title>TYC - Get filled with the spirit 24/7</title>
				<meta
					name="description"
					content="The Youth Church CE Aba Zone"
				/>
				<link rel="icon" href="/favicon.ico" />
				<>
					<Script src="https://cdn.tailwindcss.com"></Script>
				</>
			</Head>

			<div className="bg-gray-50">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block">Ready to dive in?</span>
						<span className="block text-indigo-600">
							Start your free trial today.
						</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center px-5 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								Get started
							</a>
						</div>

						<div className="ml-3 inline-flex rounded-md shadow">
							<a
								href="./about"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
