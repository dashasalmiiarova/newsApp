import React from 'react';
import Button from '@material-ui/core/Button';
import random from '../../assets/img/random.jpg';

export default class RandomNews extends React.Component{
    render(){
        return(
            <div className="random-main container-2">
                <div className="img-random-div">
                    <img className="img-random" src={random} alt=""/>
                </div>
                <div className="random-content">
                    <div className="random-data-author">
                        <div className="random-data">12.05.2000</div>
                        <div className="random-author">By: <span className="author-bold">Ariia Salm</span> </div>
                    </div>
                        <h2 className="random-title">Lorem ipsum, dolor sit amet </h2>
                        <div className="random-separator-line">
                        </div>
                    <div className="random-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias rem veniam debitis. Beatae consequuntur facere ea inventore est aliquid ex quo quis adipisci! Facere in ducimus beatae eligendi nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolore id ullam quis nihil voluptates eum! Assumenda sed temporibus molestias porro quod vero veniam consequatur nesciunt, facilis odio necessitatibus laborum!
                    </div>
                    <Button variant="outlined" className="button-random">
                        Read More
                    </Button>
                </div>
                
            </div>
        )
    }
}