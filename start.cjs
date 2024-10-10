const rspack = require('@rspack/core')
const webpack = require('webpack')
const { RspackDevServer } = require('@rspack/dev-server')
const WebpackDevServer = require('webpack-dev-server')
const configs = require('./rspack.config.cjs')
const devServerConfig = require('./dev.config.cjs')

const isRunningRspack = !!process.env.RSPACK
const isRunningWebpack = !!process.env.WEBPACK

if (!isRunningRspack && !isRunningWebpack) {
    throw new Error('Unknown bundler')
}

const bundler = isRunningRspack ? rspack : webpack
const DevServer = isRunningRspack ? RspackDevServer : WebpackDevServer

async function start() {
    const compiler = bundler(configs)

    const devServer = new DevServer(
        devServerConfig,
        compiler,
    )

    await devServer.start().catch(err => console.error(err))
}

start()
