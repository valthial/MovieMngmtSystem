using Microsoft.Extensions.Logging;
using MovieMngmtSystem.Domain.Entities;
using MovieMngmtSystem.Domain.Interfaces.Repositories;
using MovieMngmtSystem.Domain.Interfaces.Services;

namespace MovieMngmtSystem.Application.Services;

public class MovieService(IMovieRepository movieRepository,  ILogger<MovieService> logger) : IMovieService
{
    public async Task<Movie?> AddMovieAsync(Movie? movie)
    {
        await movieRepository.CreateMovieAsync(movie);
        logger.LogInformation("Movie has been created with ID: {Movie}", movie.Id);
        return movie;
    }

    public async Task<Movie?> GetMovieByIdAsync(int movieId)
    {
        return await movieRepository.GetMovieByIdAsync(movieId);
    }

    public async Task<IEnumerable<Movie?>> GetAllMoviesAsync()
    {
        return await movieRepository.GetAllMoviesAsync();
    }
    public async Task UpdateMovieAsync(Movie movie)
    {
        await movieRepository.UpdateMovieAsync(movie);
    }
}