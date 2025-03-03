using MovieMngmtSystem.Domain.Entities;

namespace MovieMngmtSystem.Domain.Interfaces.Repositories;

public interface IMovieRepository
{
    Task CreateMovieAsync(Movie? company);
    Task<Movie?> GetMovieByIdAsync(int movieId);
    Task<IEnumerable<Movie?>> GetAllMoviesAsync();
    Task UpdateMovieAsync(Movie movie);
}