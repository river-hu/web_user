/*
 * @Author: river
 * @since: 2020-04-05 13:15:18
 * @lastTime: 2020-04-20 17:50:41
 * @LastAuthor: river
 * @FilePath: /next_project/pages/index.tsx
 * @message: 文件描述
 */
// import './index.css'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

interface State{
    url:string
}
interface Props{

}
export default class extends React.Component<Props,State> {
    constructor(props:Props){
        super(props)
    }
    readonly state:State = {
        url:''
    }
    static async getInitialProps({ req ,jsonPageRes }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        console.log(jsonPageRes)
        
        return { userAgent }
      }
    componentWillMount (){
        console.log(1)
        this.setState({
            url:"123"
        })
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
                {this.state.url}
                hello world
                <br/>
                <br/>
                <p>
                    scoped!
                </p>
                Click{' '}
                <Link href={{pathname: "/about" ,query:{id:1}} } passHref>
                <div>
                    去往divbout页面
                </div>
                </Link>{' '}
                 
            </div>

        )
    }
}

