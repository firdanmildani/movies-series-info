import React, {useState, useEffect} from 'react'
import { MoviesSeriesWrapper } from '../styles/Styles.modules'

import { CircularProgress, Grid, Container } from '@mui/material';
import { fetchMovies } from '../modules/Api';

    interface Movie {
        // Movies
        id:number;
        title:string;
        poster_path:string;
        release_date:string;
        vote_average:number;

        // Tv Series
        first_air_date:string;
        name:string;
    }

    interface DataProps {
        apiEndpoint:string;
        numberOfMovies:number;
        moviesOn:boolean;
        tvSeriesOn:boolean;
        containerHeading:string;
    }

const CardContainer:React.FC<DataProps> = ({
    apiEndpoint, 
    numberOfMovies, 
    moviesOn, 
    tvSeriesOn, 
    containerHeading,
    }) => {

    const [showItems, setShowItems] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { showItems } = await fetchMovies(apiEndpoint, numberOfMovies);
                setShowItems(showItems);
                setTimeout(() => {
                    setLoading(true)
                }, 1000);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, [apiEndpoint, numberOfMovies]);

    // function to change the date format
    function getFormattedDate(dateString:string | number | Date){
        const options={
            year:"numeric",
            month:"short",
            day:"numeric"
        } as Intl.DateTimeFormatOptions;
        const date = new Date(dateString);
        return date.toLocaleDateString("en-Us",options)
    }

  return (
    <MoviesSeriesWrapper>
        {!loading ? (
            <div className='loadingOverlay'>
                <CircularProgress size={80} color='warning'/>
                <p>Loading</p>

            </div>
        ) : (
            <Container fixed maxWidth="xl">
            <div className="movieHeading">
                <h1>{containerHeading}</h1>
            </div>

            <Grid className='movieCard' container spacing={2}>
            {
                    showItems.map((items)=>{
                        const percentage = (items.vote_average / 10)* 100;
                        return(

                            <Grid className='movie' item xs={6} sm={4} md={3} lg={2} key={items.id}>
                                <div className="moviePoster">
                                    <img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt="Movie Poster" />
                                </div>
                                <div className="movieInfo">
                                    {
                                        moviesOn && (
                                            <>
                                            <h3>{items.title}</h3>
                                            <p>{getFormattedDate(items.release_date)}</p>
                                            </>
                                        )
                                    }
                                    {
                                        tvSeriesOn && (
                                            <>
                                            <h4>{items.name}</h4>
                                            <p>{getFormattedDate(items.first_air_date)}</p>
                                            </>
                                        )
                                    }
                                </div>
                            </Grid>

                        );
                    })
                }
            </Grid>
        </Container>
        )
        }
        
    </MoviesSeriesWrapper>
  )
}

export default CardContainer