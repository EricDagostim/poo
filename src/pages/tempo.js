import Link from 'next/link';
import Button from '@mui/material/Button';

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <>

            <div>
                <div>{dynamicDateString} (Dinâmico)</div>
                <div>{props.staticDateString} (Estático)</div>

                <Link href='/'> 
                    <Button variant="contained" color="primary" size="small">
                    Login
                    </Button>        
                </Link>
            </div>
        </>
    )
    
}


export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return{
        props:{
            staticDateString
        },
        revalidate: 10
    }
}
export default Tempo;