import React from 'react';
import Masonry from 'react-masonry-css'

export default class NewsItem extends React.Component{
render() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    return (
        <div>
        
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <div>My Element</div>
            <div>My Element Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nemo ut a minus voluptatem laboriosam distinctio architecto unde illo blanditiis eligendi quod ab, libero, obcaecati voluptatibus perspiciatis iusto earum? Minus.</div>
            <div>My Element</div>
            <div>My Element Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias magni error non alias quisquam blanditiis aspernatur placeat, beatae corporis a esse reiciendis laboriosam maiores deserunt neque? Odit, labore deleniti!Rem nihil nisi quos consequatur. Ad eveniet quibusdam laborum magnam dolorum saepe at animi sit atque dignissimos quod, fuga nostrum facere, ratione velit repellendus perspiciatis tempore autem est. Neque, quia!</div>
            <div>My Element</div>
            <div>My Element Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus praesentium, qui odit voluptates quam adipisci ab! Eos rem sint consequuntur reprehenderit ab? Cupiditate, molestias. Aspernatur harum dolorem necessitatibus maiores!</div>
        </Masonry>
        </div>
    );
}
}