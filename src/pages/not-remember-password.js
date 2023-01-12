import { Html } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
    return(

        <html lang='pt-br'>
            <Head>
                <title>Esqueci minha senha :/ </title>
            </Head>

            <body>
               <div>
                   <div className='panel'>
                       <h1 className='title'>Esqueceu sua senha ?</h1>
                       <h2 className='sub-title'>Digite uma senha que você lembra de ter utilizado</h2>
                       <input type="password" placeholder='Já usei essa'></input>
                    
                       <Link href='/' className='btn-secondary-action'>Voltar</Link>
                       <button className='btn-action'>Tentar</button>
                   </div>
               </div>
            </body>

        </html>

     

    )
}