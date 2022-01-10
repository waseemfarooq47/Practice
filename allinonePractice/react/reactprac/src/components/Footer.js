import react from 'react';

const Footer=(props)=>{
    console.log(props)
    return(
        <>
            <footer class="bg-dark">
            <hr/>
                <center>
                    <h3>&copy;This is Footer {props.year} {props.month}</h3> 
                </center>
            </footer>
        </>
    )
}

export default Footer