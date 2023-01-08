import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
    return(

        <html lang='pt-br'>
            <Head>
                <title>Login sistema</title>
            </Head>

            <body>
               <div>
                   <div className='panel'>
                       <h1 className='title'>Bem-vindo de volta!</h1>
                       <h2 className='sub-title'>Insira suas informações de login para acessar o sistema</h2>
                       <input type="text" placeholder='Login'></input>
                       <input type="password" placeholder='Senha'></input>

                       <Link href='/not-remember-password'>Esqueci minha senha</Link>
                       <button className='btn-action'>Acessar</button>
                   </div>
               </div>
            </body>

        </html>

     

    )
}