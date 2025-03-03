using MovieMngmtSystem.Domain.Entities;

namespace MovieMngmtSystem.Domain.Interfaces.Services;

public interface IMovieService
{
    Task<Movie?> AddMovieAsync(Movie? movie);
    Task<Movie?> GetMovieByIdAsync(int movieId);
    Task<IEnumerable<Movie?>> GetAllMoviesAsync();
}