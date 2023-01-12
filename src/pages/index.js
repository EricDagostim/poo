
import Link from 'next/link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Html } from 'next/document'


function Home() {
    return(

    
                <div>
                    <Link href='/not-remember-password'>
                        Sim
                    </Link>
    
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
                    <Button variant="contained" color="success" size="small">
                        Success
                    </Button>
                </div>
            
    )
}

export default Home
