import path from 'path'
/** @type {import('next').NextConfig} */

const __dirname = new URL('.',import.meta.url).pathname

const nextConfig = {
	// output: 'export',
	distDir: 'build',
	webpack: (config) => {
		config.module.rules.push(
		  {
			test: /\.md$/,
			use: 'raw-loader'
		  }
		)

		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname,'./')
		}
	
		return config
	  }
}

module.exports = nextConfig
