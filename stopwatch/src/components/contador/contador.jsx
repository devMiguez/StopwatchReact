import './style.css'

export default function Contador(props){
    return(
        <section className='contador'>
            
            <div className='min'>

                <h1>{props.min} : </h1>
                
            </div>
            <div className='seg'>

                <h1>{props.seg} : </h1>

            </div>
            <div className='mil'>

                <h1>{props.mil} </h1>
                
            </div>


        </section>
    );
}