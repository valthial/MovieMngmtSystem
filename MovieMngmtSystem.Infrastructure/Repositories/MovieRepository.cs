using MovieMngmtSystem.Domain.Entities;
using MovieMngmtSystem.Domain.Interfaces.Repositories;
using MovieMngmtSystem.Infrastructure.Data;

namespace MovieMngmtSystem.Infrastructure.Repositories;

public class MovieRepository(ApplicationDbContext context) : IMovieRepository
{
    public async Task CreateMovieAsync(Movie movie)
    {
        context.Movies.Add(movie);
        await context.SaveChangesAsync();
    }
}