using MovieMngmtSystem.Domain.Entities;

namespace MovieMngmtSystem.Domain.Interfaces.Services;

public interface IMovieService
{
    Task<Movie> CreateMovieAsync(Movie movie);
}