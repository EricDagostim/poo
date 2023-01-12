
import Link from 'next/link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Html } from 'next/document'
import Head from 'next/head'

function Home() {
    return(

        <Html lang='Pt-br'>
            <Head>
            <title>Login do Sistema </title>
            </Head>
            
                <div>
                    <Link href='/not-remember-password'>
                        Sim
                    </Link>
    
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
                    <Button variant="contained" color="success" size="small">
                        Success
                    </Button>
                </div>
            
        </Html>
                     
    )
}

export default Home
