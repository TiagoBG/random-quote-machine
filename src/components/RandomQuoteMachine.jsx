import React, {Component} from 'react';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

class RandomQuoteMachine extends Component{

        state ={
            quotes: [{
                "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"}],
            index: 0
        }
        componentDidMount(){
            //call the API and update state
            fetch(API).then(res => res.json()).then(res=>{
                this.setState({quotes:res.quotes}, this.getRandom);
            });
        }
        getRandom = () =>{
            const{quotes}=this.state;

            if(quotes.length>0){
                const index = Math.floor(Math.random()*quotes.length);
                this.setState({
                    index
                })
            }
        }
        render (){
            const {quotes, index}=this.state;
            const quote = quotes[index];
            const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote}-${quote.author}`;
            console.log(index);
            return (
                <div className='tarjeta d-flex align-items-center justify-content-center'>
                    <div className='col-6 mx-auto box p-5 rounded' id='quote-box'>
                        {quote && 
                            <div className='p-5'>
                                <p id='text'>{quote.quote}</p>
                                <cite className='d-block text-right' id='author'>-{quote.author}</cite>
                            </div>
                        }
                        <div className='d-flex justify-content-between'>
                            <a href={tweetURL} target='_blank' rel='noreferrer' className='btn btn-primary boton' id='tweet-quote'><FontAwesomeIcon icon={['fab', 'twitter']} /> Tweet it!</a>
                            <button className='btn btn-primary boton' onClick={this.getRandom} id='new-quote'>Get New Quote</button>
                        </div>                      
                    </div>
                </div>
            )
        }
}
export default RandomQuoteMachine;