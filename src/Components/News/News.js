import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsItem from "../NewsItem/NewsItem";

class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalItems: 0
        }
    }



    async componentDidMount() {
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1a3c17bb5c349839dcfb970429f1180&page=${this.state.page}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        console.log(parsedData);
        this.setState((prevState) => {
            return {
                ...prevState,
                articles: parsedData.articles,
                totalItems: parsedData.totalResults
            }
        });
    }


    nextClickHandler = async ()=> {
        if(this.state.page +1 > Math.ceil(this.state.totalItems/20)){}
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1a3c17bb5c349839dcfb970429f1180&page=${this.state.page + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState((prevState) => {
                return {
                    ...prevState,
                    articles: parsedData.articles,
                    page: this.state.page + 1
                }
            });
        }

    };

    prevClickHandler = async()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b1a3c17bb5c349839dcfb970429f1180&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState((prevState) => {
            return {
                ...prevState,
                articles: parsedData.articles,
                page: this.state.page - 1
            }
        });
    };

    render() {
        return (
            <div className="container my-3 ">
                <h2>News Monkey - Top headlines</h2>
                <div className="container">
                    <div className="row row-cols-3">
                        {this.state.articles.map((element) => {
                            return <div className="col" key={element.url}>
                                <NewsItem title={element.title} description={element.description}
                                          imageUrl={element.urlToImage} newsUrl={element.url}/>

                            </div>
                        })}

                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={(this.state.page <= 1)} onClick={this.prevClickHandler}
                            className="btn btn-dark">&#8592; previous
                    </button>
                    <button type="button" onClick={this.nextClickHandler}
                            className="btn btn-dark">Next &#8594;    </button>
                </div>


            </div>
        );
    }
}

News.propTypes = {};

export default News;