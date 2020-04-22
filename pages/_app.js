/*
 * @Author: river
 * @since: 2020-04-22 14:50:35
 * @lastTime: 2020-04-22 15:09:53
 * @LastAuthor: river
 * @FilePath: /web_user/pages/_app.js
 * @message: 文件描述
 */
import App , { Container } from "next/app";
import React from "react"

class Layout extends React.Component {
    render(){
        const {children} = this.props
        return <div className="layout" >
            {children}
            <style jsx>
                {
                    `
                    .layout{
                        
                    }
                    `
                }
            </style>
        </div>
    }
}


export default class Myapp extends App {
    static async getInitialProps({Component,ctx}){
        let pageProps = {};
        console.log("test")
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }
        return {pageProps}
    }
    render(){
        const {Component,pageProps} = this.props
        
        return <Container>
            <Layout>
            <Component {...pageProps}/>

            </Layout>
        </Container>
    }
}