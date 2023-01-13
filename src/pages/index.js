
import Link from 'next/link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


function Home() {
    return(
        

        <>
  
            <Head>
                <title>Página de login</title>
            </Head>
       
        
        
        

        <div class="div-login">
          <TextField id="outlined-basic" label="E-mail" variant="outlined"/>
          <TextField id="outlined-password-input" label="Password" variant="outlined" autoComplete="current-password" type="password"/>
           
             
          <Link href='/not-remember-password'> 
              Esqueci minha senha             
          </Link>
       
          
          <Button variant="contained" color="success" size="small">
              Success
          </Button>    


          <Link href='/tempo'> 
                <Button variant="contained" color="error" size="small">
                Tempo
                </Button>        
          </Link>
        </div>
      

        </>
      
            
    )
}

export default Home
