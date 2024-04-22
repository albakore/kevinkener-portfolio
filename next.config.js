/** @type {import('next').NextConfig} */

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
	
		return config
	  }
}

module.exports = nextConfig
