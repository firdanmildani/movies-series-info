import React, {useState, useEffect} from 'react'
import { HeroWrapper } from '../styles/Styles.modules'
import { fetchMovies } from '../modules/Api';

import { Container, Button } from '@mui/material';

interface Movie {
    // Movies
    id:number;
    title:string;
    backdrop_path:string;
    overview:string;
   
    // Tv Series
    name:string;
}

interface DataProps {
    apiEndpoint:string;
    numberOfMovies:number;
    
}


const Hero:React.FC<DataProps> = ({
    apiEndpoint,
    numberOfMovies,
}) => {

    const [showItems, setShowItems] = useState<Movie[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { showItems } = await fetchMovies(apiEndpoint, numberOfMovies);
                setShowItems(showItems);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
    
        fetchData();
    }, [apiEndpoint, numberOfMovies]);
    
    return (
        <HeroWrapper>
            <div className="hero">
                {showItems.map((item) => (
                    <div key={item.id} style={{backgroundImage:`linear-gradient(0deg,#020916 0%, #020916 2%, rgba(255,255,255,0) 100%), url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`}} className="hero-image">
                        <Container fixed maxWidth="md">
                            <div className="hero-text">
                                <h1>{item.title}</h1>
                                <p>{item.overview}</p>
                                <div className="hero-buttons">
                                    <Button variant="outlined" size="large">Watch Trailer</Button>
                                    <Button variant="outlined" size="large">See Detail</Button>
                                </div>
                            </div>

                        </Container>
                    </div>
                ))}
            </div>
    </HeroWrapper>
  )
}

export default Hero