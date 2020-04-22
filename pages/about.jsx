/*
 * @Author: river
 * @since: 2020-04-05 13:15:18
 * @lastTime: 2020-04-05 14:13:57
 * @LastAuthor: river
 * @FilePath: /next_project/pages/about.jsx
 * @message: 文件描述
 */
// import './index.css'
import Head from 'next/head'
import React from 'react'

export default class extends React.Component {
    constructor(props){
        super(props)
        
    }
    static async getInitialProps({ req , pathname }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        console.log(pathname)
        
        return { userAgent }
      }
    componentWillMount (){
        console.log("about")
         
    }
    render() {
        return (
            <div>
                <Head>
                    <title>
                        next学习
                    </title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                </Head>

              about

            </div>

        )
    }
}

