using MovieMngmtSystem.Domain.Entities;

namespace MovieMngmtSystem.Domain.Interfaces.Repositories;

public interface IMovieRepository
{
    Task CreateMovieAsync(Movie company);
}