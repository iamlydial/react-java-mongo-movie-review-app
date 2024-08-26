import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({ movies }) => {
  return (
    <div className="movie-carousel-container">
      <h1>Hero</h1>
      <Carousel>
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => {
            return (
              <Paper key={index}>
                <div className="movie-card-container">
                  <div className="movie-card">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })
        ) : (
          <p>Loading movies...</p> // Optional loading message
        )}
      </Carousel>
    </div>
  );
};

export default Hero;
